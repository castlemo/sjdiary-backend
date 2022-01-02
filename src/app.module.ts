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
} from './common/constants';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppResolver } from './app.resolver';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('local', 'prod').required(),
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
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: 'schema.gql',
        debug: true,
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
        logging: process.env.NODE_ENV == 'local' ? false : false,
        migrations: ['dist/src/migrations/*{.ts,.js}'],
        entities: ['dist/src/**/*.entity{.ts,.js}'],
        cli: {
          migrationsDir: './src/migrations',
        },
        // synchronize: process.env.NODE_ENV == 'development' ? true : false,
        // dropSchema: process.env.NODE_ENV == 'development' ? true : false,
      }),
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
