import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = app.get(ConfigService).get('PORT');

  await app.listen(port);

  console.log(`Tiry Server Start. Port: ${port}`);
}
bootstrap();
