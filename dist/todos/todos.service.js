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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const typeorm_2 = require("typeorm");
const users_1 = require("../users");
const models_1 = require("./../models");
const todos_repository_1 = require("./todos.repository");
let TodosService = class TodosService {
    async todos(authUser, { startDate, endDate }) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        const todos = await this.todoRepo.find({
            where: [
                {
                    user,
                    startedAt: (0, typeorm_2.MoreThanOrEqual)(startDate),
                    deletedAt: (0, typeorm_2.IsNull)(),
                },
                {
                    user,
                    finishedAt: (0, typeorm_2.LessThanOrEqual)(endDate),
                    deletedAt: (0, typeorm_2.IsNull)(),
                },
                {
                    user,
                    startedAt: (0, typeorm_2.IsNull)(),
                    finishedAt: (0, typeorm_2.IsNull)(),
                    deletedAt: (0, typeorm_2.IsNull)(),
                },
            ],
        });
        return todos.map((todo) => new models_1.TodoModel(todo));
    }
    async createTodo(authUser, { content, startedAt, finishedAt }) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        const unSetTimeTodos = await this.todoRepo.find({
            where: {
                user,
                startedAt: (0, typeorm_2.IsNull)(),
                finishedAt: (0, typeorm_2.IsNull)(),
                deletedAt: (0, typeorm_2.IsNull)(),
            },
        });
        if (3 < unSetTimeTodos.length) {
            throw new apollo_server_express_1.ApolloError('does not create todo');
        }
        const todo = await this.todoRepo.save({
            user,
            content,
            startedAt: startedAt ? new Date(startedAt).toISOString() : undefined,
            finishedAt: finishedAt ? new Date(finishedAt).toISOString() : undefined,
        });
        return new models_1.TodoModel(todo);
    }
    async updateTodo(authUser, input) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        if (Object.keys(input).length < 1) {
            throw new apollo_server_express_1.ApolloError('input is empty');
        }
        const todo = await this.todoRepo.findOne({
            user,
            id: input.id,
        });
        if (input.content) {
            todo.content = input.content;
        }
        if (input.completedAt) {
            todo.completedAt = new Date(input.completedAt).toISOString();
        }
        if (input.startedAt) {
            todo.startedAt = new Date(input.startedAt).toISOString();
        }
        if (input.finishedAt) {
            todo.finishedAt = new Date(input.finishedAt).toISOString();
        }
        const updatedTodo = await this.todoRepo.save(todo);
        return new models_1.TodoModel(updatedTodo);
    }
    async deleteTodo(authUser, { todoId }) {
        try {
            const user = await this.userRepo.findByAuth0Id(authUser.sub);
            await this.todoRepo.softDelete({ user, id: todoId });
            return true;
        }
        catch (err) {
            console.error(err);
            return false;
        }
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(todos_repository_1.TodosRepository),
    __metadata("design:type", todos_repository_1.TodosRepository)
], TodosService.prototype, "todoRepo", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(users_1.UsersRepository),
    __metadata("design:type", users_1.UsersRepository)
], TodosService.prototype, "userRepo", void 0);
TodosService = __decorate([
    (0, common_1.Injectable)()
], TodosService);
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map