import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '../auth';
import { getConfig as loadConfig } from '../config';
import { DatabaseModule } from '../database';
import { GqlModule } from '../graphql';
import { ReviewsModule } from '../reviews';
import { TodosModule } from '../todos';
import { UsersModule } from '../users';
import { UtilModule } from '../utils';

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
    UsersModule,
    TodosModule,
    ReviewsModule,
    UtilModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
