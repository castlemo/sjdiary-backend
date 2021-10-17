import { ExecutionContext } from '@nestjs/common';
declare const GqlAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlAuthGuard extends GqlAuthGuard_base {
    getRequest(context: ExecutionContext): any;
}
export declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
export interface Auth0UserInterface {
    iss: string;
    sub: string;
    aud: any;
    iat: any;
    exp: any;
    azp: any;
    scope: string;
    permissions: any;
}
export {};
