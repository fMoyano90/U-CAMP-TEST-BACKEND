import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { SearchService } from '../../services/search.service';
import { Cache } from 'cache-manager';

@Injectable()
export class SearchInteractor {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly searchService: SearchService,
  ) {}

  async execute(query): Promise<any> {
    try {
      const response = [];
      const cacheData = await this.cacheManager.get(query);
      if (cacheData) {
        response.push(cacheData);
      } else {
        const resultSearchApi = await this.searchService.getData(query);
        resultSearchApi.data.results.map((result) => {
          response.push({
            id: result.id,
            title: result.title,
            price: result.price,
            currency_id: result.currency_id,
            available_quantity: result.available_quantity,
            thumbnail: result.thumbnail,
            condition: result.condition,
          });
        });
        await this.cacheManager.set(query, response, { ttl: 0 });
      }
      return response;
    } catch (e) {
      return {
        error: {
          code: 'ERRORCODE',
          message: e,
        },
      };
    }
  }
}
