"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_1 = require("../auth");
const config_2 = require("../config");
const database_1 = require("../database");
const graphql_1 = require("../graphql");
const reviews_1 = require("../reviews");
const todos_1 = require("../todos");
const users_1 = require("../users");
const utils_1 = require("../utils");
const app_controller_1 = require("./app.controller");
const app_resolver_1 = require("./app.resolver");
const app_service_1 = require("./app.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [config_2.getConfig],
            }),
            graphql_1.GqlModule,
            database_1.DatabaseModule,
            auth_1.AuthModule,
            users_1.UsersModule,
            todos_1.TodosModule,
            reviews_1.ReviewsModule,
            utils_1.UtilModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, app_resolver_1.AppResolver],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map