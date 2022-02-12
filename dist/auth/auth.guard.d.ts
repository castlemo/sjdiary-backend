import { ExecutionContext } from '@nestjs/common';
export declare const JWT = "jwt";
declare const GqlAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlAuthGuard extends GqlAuthGuard_base {
    getRequest(context: ExecutionContext): any;
}
export {};
