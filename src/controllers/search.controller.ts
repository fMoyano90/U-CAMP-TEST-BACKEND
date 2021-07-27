import { Controller, Get, Query, CACHE_MANAGER, Inject } from '@nestjs/common';
import { SearchInteractor } from '../use-case/search';
import Cache from 'cache-manager';

@Controller()
export class AppController {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly searchInteractor: SearchInteractor,
  ) {}

  @Get('/api/search')
  async search(@Query() { query }): Promise<any> {
    const result = await this.searchInteractor.execute(query);
    return result;
  }
}
