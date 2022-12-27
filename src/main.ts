import { NestFactory } from '@nestjs/core';
import { WinstonModule, WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app.module';
const winston = require('winston');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);
}
bootstrap();
