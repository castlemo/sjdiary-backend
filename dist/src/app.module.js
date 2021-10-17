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
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const ormconfig_1 = require("../ormconfig");
const user_module_1 = require("./user/user.module");
const user_setting_module_1 = require("./user-setting/user-setting.module");
const todo_module_1 = require("./todo/todo.module");
const todo_period_module_1 = require("./todo-period/todo-period.module");
const category_module_1 = require("./category/category.module");
const auth_module_1 = require("./auth/auth.module");
const test_module_1 = require("./test/test.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'schema.gql',
                debug: true,
                playground: true,
            }),
            typeorm_1.TypeOrmModule.forRoot(ormconfig_1.ormconfig),
            user_module_1.UserModule,
            user_setting_module_1.UserSettingModule,
            todo_module_1.TodoModule,
            todo_period_module_1.TodoPeriodModule,
            category_module_1.CategoryModule,
            auth_module_1.AuthModule,
            test_module_1.TestModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map