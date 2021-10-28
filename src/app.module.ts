import { MiddlewareConsumer, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ormconfig } from '../ormconfig';
import { UserModule } from './user/user.module';
import { UserSettingModule } from './user-setting/user-setting.module';
import { TodoModule } from './todo/todo.module';
import { TodoPeriodModule } from './todo-period/todo-period.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { TestModule } from './test/test.module';
import { config } from './config';
import { AppResolver } from './app.resolver';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      // sortSchema: true,
      debug: true,
      playground: true,
      cors: {
        origin: [config.frontendUrl],
        credentials: true,
      },
      plugins: [],
    }),
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    UserSettingModule,
    TodoModule,
    TodoPeriodModule,
    CategoryModule,
    AuthModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
