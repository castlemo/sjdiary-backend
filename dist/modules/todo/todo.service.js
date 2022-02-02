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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const typeorm_2 = require("typeorm");
const user_1 = require("../user");
const todo_repository_1 = require("./todo.repository");
let TodoService = class TodoService {
    async todos(authUser, { startDate, endDate }) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        return this.todoRepo.find({
            where: {
                user,
                startedAt: (0, typeorm_2.MoreThanOrEqual)(startDate),
                finishedAt: (0, typeorm_2.LessThanOrEqual)(endDate),
                deletedAt: (0, typeorm_2.IsNull)(),
            },
            order: {
                startedAt: 'ASC',
            },
        });
    }
    async createTodo(authUser, input) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        return await this.todoRepo.save(Object.assign({ user }, input));
    }
    async updateTodo(authUser, input) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        if (Object.keys(input).length < 1) {
            throw new apollo_server_express_1.ApolloError('This input is empty');
        }
        return await this.todoRepo.save(Object.assign({ user }, input));
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
    (0, typeorm_1.InjectRepository)(todo_repository_1.TodoRepository),
    __metadata("design:type", todo_repository_1.TodoRepository)
], TodoService.prototype, "todoRepo", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(user_1.UserRepository),
    __metadata("design:type", user_1.UserRepository)
], TodoService.prototype, "userRepo", void 0);
TodoService = __decorate([
    (0, common_1.Injectable)()
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map