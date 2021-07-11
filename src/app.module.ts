import { Module } from '@nestjs/common';
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
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      debug: true,
      playground: true,
      // cors: {
      //   origin: [],
      //   credentials: true,
      // },
    }),
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    UserSettingModule,
    TodoModule,
    TodoPeriodModule,
    CategoryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
