import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule, TodoModule, ReviewModule, UtilModule } from './modules';
import { AuthModule } from './auth';
import { DatabaseModule } from './database';
import { getConfig as loadConfig } from './config';
import { GqlModule } from './graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';

// TODO Module Options Class로 분리
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
