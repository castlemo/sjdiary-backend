import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { GQL } from '../common/constants';
import { LoggingPlugin } from './plugins';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get(GQL),
        buildSchemaOptions: {
          dateScalarMode: 'timestamp',
        },
      }),
    }),
  ],
  providers: [LoggingPlugin],
  exports: [GraphQLModule, LoggingPlugin],
})
export class GqlModule {}
