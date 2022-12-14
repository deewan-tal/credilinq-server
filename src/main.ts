import dotenv = require('dotenv');

import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

dotenv.config();

(async () => {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.setGlobalPrefix(`/credilinq`);
  const port = process.env.PORT;
  await app.listen(port, '0.0.0.0');
  console.log(`Running server on PORT: ${port}`);
  process.on('unhandledRejection', (err) => {
    console.log('[ALERT][FATAL][UNHANDLED EXCEPTION]', err);
  });
})()
