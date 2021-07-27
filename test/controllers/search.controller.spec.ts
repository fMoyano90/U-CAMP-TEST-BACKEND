import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../src/controllers/search.controller';
import { SearchService } from '../../src/services/search.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [SearchService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
    });
  });
});
