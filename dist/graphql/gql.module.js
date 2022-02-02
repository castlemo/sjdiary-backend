"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const constants_1 = require("../common/constants");
const plugins_1 = require("./plugins");
let GqlModule = class GqlModule {
};
GqlModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => (Object.assign(Object.assign({}, configService.get(constants_1.GQL)), { buildSchemaOptions: {
                        dateScalarMode: 'timestamp',
                    } })),
            }),
        ],
        providers: [plugins_1.LoggingPlugin],
        exports: [graphql_1.GraphQLModule, plugins_1.LoggingPlugin],
    })
], GqlModule);
exports.GqlModule = GqlModule;
//# sourceMappingURL=gql.module.js.map