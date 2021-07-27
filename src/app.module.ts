import { Module, CacheModule } from '@nestjs/common';
import { AppController } from './controllers/search.controller';
import { UseCaseModule } from './use-case/use-case.module';

@Module({
  imports: [UseCaseModule, CacheModule.register()],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
