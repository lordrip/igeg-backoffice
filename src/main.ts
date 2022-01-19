import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Configuration } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();

  const configService = app.get(ConfigService);
  const config = configService.get<Configuration>('config');

  await app.listen(config.server.port);
  Logger.log(`listening at port :${config.server.port}`);
}
bootstrap();
