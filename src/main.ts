import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app';
import { PORT } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = app.get(ConfigService).get(PORT);

  await app.listen(port);

  console.log(`SJDiary Server Start. Port: ${port}`);
}
bootstrap();
