import { GqlModuleOptions } from '@nestjs/graphql';
import { ConnectionOptions } from 'typeorm';

export interface IAuth0Config {
  domain: string;
  audience: string;
}

export interface IConfig {
  port: number;
  db: ConnectionOptions;
  auth0: IAuth0Config;
  gql: GqlModuleOptions;
}
