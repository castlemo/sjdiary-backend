import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { AuthModule } from './auth';
import { getConfig as loadConfig } from './config';
import { DatabaseModule } from './database';
import { GqlModule } from './graphql';
import { ReviewModule, TodoModule, UserModule, UtilModule } from './modules';

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
