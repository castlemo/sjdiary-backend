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
const typeorm_2 = require("typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const user_entity_1 = require("../user/user.entity");
const category_entity_1 = require("../category/category.entity");
const todo_period_entity_1 = require("../todo-period/todo-period.entity");
const Utils = require("../common/utils");
const todo_entity_1 = require("./todo.entity");
let TodoService = class TodoService {
    constructor(connection) {
        this.connection = connection;
    }
    async createTodo(currentUser, createTodoInput) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const _user = await this.userRepo.findOne({
                auth0Id: currentUser.sub,
                deletedAt: null,
            });
            if (!_user) {
                throw new apollo_server_express_1.ApolloError('[createTodo] this user Not Exist');
            }
            const createTodo = {
                User: _user,
                contents: createTodoInput.contents,
                allIndex: null,
                categoryIndex: null,
                Category: null,
                TodoPeriod: null,
            };
            if (createTodoInput.categoryId) {
                const category = await this.categoryRepo.findOne({
                    User: _user,
                    id: createTodoInput.categoryId,
                    deletedAt: null,
                });
                if (!category) {
                    throw new apollo_server_express_1.ApolloError('[createTodo] this category Not Exist');
                }
                createTodo.Category = category;
                const categoryTodoCount = await this.todoRepo.count({
                    where: {
                        User: _user,
                        Category: category,
                        deletedAt: null,
                    },
                });
                createTodo.categoryIndex = categoryTodoCount;
            }
            const todoCount = await this.todoRepo.count({
                where: { User: _user, deletedAt: null },
            });
            createTodo['allIndex'] = todoCount;
            const _todo = this.todoRepo.create(createTodo);
            const todo = await queryRunner.manager.save(_todo);
            if (!!createTodoInput.isTime &&
                !!createTodoInput.startedAt &&
                !!createTodoInput.endedAt) {
                const _todoPeriod = this.todoPeriodRepo.create({
                    Todo: todo,
                    isTime: createTodoInput.isTime,
                    startedAt: createTodoInput.startedAt,
                    endedAt: createTodoInput.endedAt,
                });
                const todoPeriod = await queryRunner.manager.save(_todoPeriod);
                todo.TodoPeriod = todoPeriod;
            }
            await queryRunner.commitTransaction();
            return todo;
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            if (err instanceof apollo_server_express_1.ApolloError) {
                throw err;
            }
            else {
                throw new apollo_server_express_1.ApolloError(err);
            }
        }
        finally {
            await queryRunner.release();
        }
    }
    async updateTodo(currentUser, updateTodoInput) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user = await this.userRepo.findOne({
                auth0Id: currentUser.sub,
                deletedAt: null,
            });
            if (!user) {
                throw new apollo_server_express_1.ApolloError('[updateTodo] this user Not Exist');
            }
            const _todo = await this.todoRepo.findOne({
                where: {
                    User: user,
                    id: updateTodoInput.todoId,
                    deletedAt: null,
                },
                join: {
                    alias: 'todo',
                    leftJoinAndSelect: {
                        TodoPeriod: 'todo.TodoPeriod',
                    },
                },
            });
            if (!_todo) {
                throw new apollo_server_express_1.ApolloError('[updateTodo] this todo Not Exist');
            }
            if (updateTodoInput.contents) {
                _todo.contents = updateTodoInput.contents;
            }
            if (updateTodoInput.categoryId) {
                const category = await this.categoryRepo.findOne({
                    where: {
                        User: user,
                        id: updateTodoInput.categoryId,
                        deletedAt: null,
                    },
                });
                _todo.Category = category;
            }
            if (updateTodoInput.isTime ||
                !!updateTodoInput.startedAt ||
                !!updateTodoInput.endedAt) {
                let _todoPeriod;
                if (_todo.TodoPeriod) {
                    _todoPeriod = await this.todoPeriodRepo.findOne({
                        Todo: _todo,
                        id: _todo.TodoPeriod.id,
                    });
                }
                else {
                    _todoPeriod = this.todoPeriodRepo.create({
                        Todo: _todo,
                        isTime: updateTodoInput.isTime,
                    });
                }
                if (!!updateTodoInput.startedAt) {
                    _todoPeriod.startedAt = updateTodoInput.startedAt;
                }
                if (!!updateTodoInput.endedAt) {
                    _todoPeriod.endedAt = updateTodoInput.endedAt;
                }
                const todoPeriod = await queryRunner.manager.save(_todoPeriod);
                _todo.TodoPeriod = todoPeriod;
            }
            const todo = await queryRunner.manager.save(_todo);
            await queryRunner.commitTransaction();
            return todo;
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            if (err instanceof apollo_server_express_1.ApolloError) {
                throw err;
            }
            else {
                throw new apollo_server_express_1.ApolloError(err);
            }
        }
        finally {
            await queryRunner.release();
        }
    }
    async deleteTodo(currentUser, todoId) {
        const user = await this.userRepo.findOne({
            auth0Id: currentUser.sub,
            deletedAt: null,
        });
        if (!user) {
            throw new apollo_server_express_1.ApolloError('[deleteTodo] this user Not Exist');
        }
        const _todo = await this.todoRepo.findOne({
            where: {
                User: user,
                id: todoId,
                deletedAt: null,
            },
        });
        if (!_todo) {
            throw new apollo_server_express_1.ApolloError('[deleteTodo] this todo Not Exist');
        }
        await this.todoRepo.softDelete(_todo.id);
        return true;
    }
    async getTodo(currentUser, todoId) {
        const user = await this.userRepo.findOne({
            where: { auth0Id: currentUser.sub, deletedAt: null },
        });
        if (!user) {
            throw new apollo_server_express_1.ApolloError('[getTodo] this user Not Exist');
        }
        const todo = await this.todoRepo.findOne({
            where: {
                User: user,
                id: todoId,
                deletedAt: null,
            },
            join: {
                alias: 'todo',
                leftJoinAndSelect: {
                    TodoPeriod: 'todo.TodoPeriod',
                },
            },
        });
        if (!todo) {
            throw new apollo_server_express_1.ApolloError('[getTodo] this todo Not Exist');
        }
        return todo;
    }
    async getTodos(currentUser, { type, categoryId }) {
        const user = await this.userRepo.findOne({
            where: { auth0Id: currentUser.sub, deletedAt: null },
        });
        if (!user) {
            throw new apollo_server_express_1.ApolloError('[getTodos] this user Not Exist');
        }
        let todos = [];
        if (type === 'all') {
            todos = await this.todoRepo.find({
                where: {
                    User: user,
                    deletedAt: null,
                    checkedAt: null,
                },
                join: {
                    alias: 'todo',
                    leftJoinAndSelect: {
                        TodoPeriod: 'todo.TodoPeriod',
                        Category: 'todo.Category',
                    },
                },
                order: {
                    allIndex: 'ASC',
                },
            });
        }
        else if (type === 'today') {
            const { startDate, endDate } = Utils.getTodayUTCDate();
            todos = await this.todoRepo
                .createQueryBuilder('todo')
                .where('todo.userId = :userId AND todo.deletedAt = null', {
                userId: user.id,
            })
                .leftJoinAndSelect('todo.TodoPeriod', 'todoPeriod')
                .andWhere('todoPeriod.startedAt >= :startDate AND todoPeriod.endedAt <= :endDate', {
                startDate,
                endDate,
            })
                .orderBy('todoPeriod.startedAt', 'ASC')
                .getMany();
        }
        else if (type === 'category' && !!categoryId) {
            const category = await this.categoryRepo.findOne({
                where: {
                    User: user,
                    id: categoryId,
                    deletedAt: null,
                },
            });
            todos = await this.todoRepo.find({
                where: {
                    User: user,
                    Category: category,
                    deletedAt: null,
                    checkedAt: null,
                },
                join: {
                    alias: 'todo',
                    leftJoinAndSelect: {
                        TodoPeriod: 'todo.TodoPeriod',
                        Category: 'todo.Category',
                    },
                },
                order: {
                    categoryIndex: 'ASC',
                },
            });
        }
        else {
            todos = await this.todoRepo.find({
                where: {
                    User: user,
                    Category: (0, typeorm_2.Not)(null),
                    deletedAt: null,
                    checkedAt: null,
                },
                join: {
                    alias: 'todo',
                    leftJoinAndSelect: {
                        TodoPeriod: 'todo.TodoPeriod',
                        Category: 'todo.Category',
                    },
                },
            });
        }
        if (!todos) {
            throw new apollo_server_express_1.ApolloError('[getTodos] this todos Not Exist');
        }
        return todos;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], TodoService.prototype, "userRepo", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(category_entity_1.Category),
    __metadata("design:type", typeorm_2.Repository)
], TodoService.prototype, "categoryRepo", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(todo_entity_1.Todo),
    __metadata("design:type", typeorm_2.Repository)
], TodoService.prototype, "todoRepo", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(todo_period_entity_1.TodoPeriod),
    __metadata("design:type", typeorm_2.Repository)
], TodoService.prototype, "todoPeriodRepo", void 0);
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map