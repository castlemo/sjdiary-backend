import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
export declare const AUTH0 = "auth0";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: any): unknown;
}
export {};
