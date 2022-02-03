import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { LoggingPlugin } from './plugins';

export const GQL = 'gql';

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
