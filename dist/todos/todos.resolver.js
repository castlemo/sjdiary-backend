"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_1 = require("../auth");
const models_1 = require("../models");
const input_1 = require("./dto/input");
const todos_service_1 = require("./todos.service");
let TodosResolver = class TodosResolver {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async todos(authUser, input) {
        return await this.todoService.todos(authUser, input);
    }
    async createTodo(authUser, input) {
        return await this.todoService.createTodo(authUser, input);
    }
    async updateTodo(authUser, input) {
        return await this.todoService.updateTodo(authUser, input);
    }
    async deleteTodo(authUser, input) {
        return await this.todoService.deleteTodo(authUser, input);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [models_1.TodoModel]),
    (0, common_1.UseGuards)(auth_1.GqlAuthGuard),
    __param(0, (0, auth_1.Auth0User)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_1.TodosInput]),
    __metadata("design:returntype", Promise)
], TodosResolver.prototype, "todos", null);
__decorate([
    (0, graphql_1.Mutation)(() => models_1.TodoModel),
    (0, common_1.UseGuards)(auth_1.GqlAuthGuard),
    __param(0, (0, auth_1.Auth0User)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_1.CreateTodoInput]),
    __metadata("design:returntype", Promise)
], TodosResolver.prototype, "createTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => models_1.TodoModel),
    (0, common_1.UseGuards)(auth_1.GqlAuthGuard),
    __param(0, (0, auth_1.Auth0User)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_1.UpdateTodoInput]),
    __metadata("design:returntype", Promise)
], TodosResolver.prototype, "updateTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, common_1.UseGuards)(auth_1.GqlAuthGuard),
    __param(0, (0, auth_1.Auth0User)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_1.DeleteTodoInput]),
    __metadata("design:returntype", Promise)
], TodosResolver.prototype, "deleteTodo", null);
TodosResolver = __decorate([
    (0, graphql_1.Resolver)(() => models_1.TodoModel),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], TodosResolver);
exports.TodosResolver = TodosResolver;
//# sourceMappingURL=todos.resolver.js.map