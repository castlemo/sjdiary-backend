import { ConfigService } from '@nestjs/config';
import { Connection } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DB } from '../common/constants';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get(DB),
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
