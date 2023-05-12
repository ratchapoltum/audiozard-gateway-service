import { Test, type TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', (): void => {
  let appController: AppController;

  beforeEach(async (): Promise<void> => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('success cases', (): void => {
    it('should return "Hello World!"', (): void => {
      expect<string>(appController.getHello()).toBe<string>('Hello World!');
    });
  });
});
