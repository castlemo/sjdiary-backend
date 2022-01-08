import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { GQL } from '../common/constants';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get(GQL),
      }),
    }),
  ],
  exports: [GraphQLModule],
})
export class GqlModule {}
