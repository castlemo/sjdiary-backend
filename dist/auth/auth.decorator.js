"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth0User = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.Auth0User = (0, common_1.createParamDecorator)((data, context) => graphql_1.GqlExecutionContext.create(context).getContext().req.user);
//# sourceMappingURL=auth.decorator.js.map