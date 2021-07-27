import { Module, HttpModule, CacheModule } from '@nestjs/common';
import { SearchInteractor } from './search';
import { SearchService } from '../services/search.service';

@Module({
  imports: [HttpModule, CacheModule.register()],
  providers: [SearchInteractor, SearchService],
  exports: [SearchInteractor, SearchService],
})
export class UseCaseModule {}
