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
exports.Todo = void 0;
const todo_period_entity_1 = require("../todo-period/todo-period.entity");
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const category_entity_1 = require("../category/category.entity");
let Todo = class Todo extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], Todo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], Todo.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Todo.prototype, "contents", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'all_index' }),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Todo.prototype, "allIndex", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'category_index', nullable: true }),
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Todo.prototype, "categoryIndex", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'category_id', nullable: true }),
    __metadata("design:type", Number)
], Todo.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'checked_at', type: 'timestamp', nullable: true }),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], Todo.prototype, "checkedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp' }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Todo.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamp' }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Todo.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Todo.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.Todos),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Todo.prototype, "User", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => todo_period_entity_1.TodoPeriod, (todoPeriod) => todoPeriod.Todo),
    (0, graphql_1.Field)(() => todo_period_entity_1.TodoPeriod, { nullable: true }),
    __metadata("design:type", todo_period_entity_1.TodoPeriod)
], Todo.prototype, "TodoPeriod", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.Todos),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    (0, graphql_1.Field)(() => category_entity_1.Category, { nullable: true }),
    __metadata("design:type", category_entity_1.Category)
], Todo.prototype, "Category", void 0);
Todo = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.entity.js.map