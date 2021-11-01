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
exports.TodoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const todo_service_1 = require("./todo.service");
const todo_entity_1 = require("./todo.entity");
const input_1 = require("./input");
let TodoResolver = class TodoResolver {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async getTodo(currentUser, todoId) {
        return await this.todoService.getTodo(currentUser, todoId);
    }
    async getTodos(currentUser, input) {
        console.log(input);
        return await this.todoService.getTodos(currentUser, input);
    }
    async createTodo(currentUser, input) {
        return await this.todoService.createTodo(currentUser, input);
    }
    async updateTodo(currentUser, input) {
        return await this.todoService.updateTodo(currentUser, input);
    }
    async deleteTodo(currentUser, todoId) {
        return await this.todoService.deleteTodo(currentUser, todoId);
    }
};
__decorate([
    (0, graphql_1.Query)(() => todo_entity_1.Todo),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_guard_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('todoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "getTodo", null);
__decorate([
    (0, graphql_1.Query)(() => [todo_entity_1.Todo]),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_guard_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_1.GetTodosInput]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "getTodos", null);
__decorate([
    (0, graphql_1.Mutation)(() => todo_entity_1.Todo),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_guard_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_1.CreateTodoInput]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "createTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => todo_entity_1.Todo),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_guard_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_1.UpdateTodoInput]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "updateTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_guard_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('todoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "deleteTodo", null);
TodoResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoResolver);
exports.TodoResolver = TodoResolver;
//# sourceMappingURL=todo.resolver.js.map