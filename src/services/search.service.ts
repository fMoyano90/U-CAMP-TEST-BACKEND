import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class SearchService {
  constructor(private httpService: HttpService) {}
  getData(query) {
    const data = this.httpService.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`,
    );
    return data.toPromise();
  }
}
