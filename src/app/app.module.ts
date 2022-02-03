import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '../auth';
import { getConfig as loadConfig } from '../config';
import { DatabaseModule } from '../database';
import { GqlModule } from '../graphql';
import { ReviewModule } from '../review';
import { TodoModule } from '../todo';
import { UserModule } from '../user';
import { UtilModule } from '../util';

import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [loadConfig],
    }),
    GqlModule,
    DatabaseModule,
    AuthModule,
    UserModule,
    TodoModule,
    ReviewModule,
    UtilModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
