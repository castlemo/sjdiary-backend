"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_1 = require("../users");
const todos_repository_1 = require("./todos.repository");
const todos_resolver_1 = require("./todos.resolver");
const todos_service_1 = require("./todos.service");
let TodosModule = class TodosModule {
};
TodosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([todos_repository_1.TodosRepository]), users_1.UsersModule],
        providers: [todos_resolver_1.TodosResolver, todos_service_1.TodosService],
        exports: [typeorm_1.TypeOrmModule],
    })
], TodosModule);
exports.TodosModule = TodosModule;
//# sourceMappingURL=todos.module.js.map