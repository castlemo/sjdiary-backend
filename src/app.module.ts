import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

import {
  DB_HOST,
  DB_DATABASE,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  FRONTEND_URL,
} from './config/constants';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppResolver } from './app.resolver';

const NODE_ENV = process.env.NODE_ENV;
// TODO Module Options Class로 분리
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${NODE_ENV}`,
      ignoreEnvFile: NODE_ENV !== 'local',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('local', 'dev', 'prod').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
        AUTH0_DOMAIN: Joi.string().required(),
        AUTH0_AUDIENCE: Joi.string().required(),
        FRONTEND_URL: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        autoSchemaFile: true,
        debug: configService.get(NODE_ENV) === 'local',
        playground: true,
        sortSchema: true,
        cors: {
          origin: [configService.get(FRONTEND_URL)],
          credentials: true,
        },
        plugins: [],
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get(DB_HOST),
        port: configService.get(DB_PORT),
        username: configService.get(DB_USERNAME),
        password: configService.get(DB_PASSWORD),
        database: configService.get(DB_DATABASE),
        logging: NODE_ENV == 'local' ? false : false,
        migrations: ['dist/src/migrations/*{.ts,.js}'],
        entities: ['dist/src/**/*.entity{.ts,.js}'],
        cli: {
          migrationsDir: './src/migrations',
        },
        // synchronize: NODE_ENV == 'development' ? true : false,
        // dropSchema: NODE_ENV == 'development' ? true : false,
      }),
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
