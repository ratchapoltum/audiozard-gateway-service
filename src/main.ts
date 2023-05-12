import { type INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create<INestApplication>(AppModule);

  await app.listen(3000);
}
bootstrap();
