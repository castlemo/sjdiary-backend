import { GqlModuleOptions } from '@nestjs/graphql';
import { ConnectionOptions } from 'typeorm';
interface IAuth0 {
    domain: string;
    audience: string;
}
export interface IConfig {
    port: number;
    db: ConnectionOptions;
    auth0: IAuth0;
    gql: GqlModuleOptions;
}
export {};
