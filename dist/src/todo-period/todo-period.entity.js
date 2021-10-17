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
exports.TodoPeriod = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const todo_entity_1 = require("../todo/todo.entity");
let TodoPeriod = class TodoPeriod extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], TodoPeriod.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'todo_id' }),
    __metadata("design:type", Number)
], TodoPeriod.prototype, "todoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_time' }),
    (0, graphql_1.Field)(() => Boolean, { description: '시간설정' }),
    __metadata("design:type", Boolean)
], TodoPeriod.prototype, "isTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'started_at', type: 'timestamp' }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], TodoPeriod.prototype, "startedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ended_at', type: 'timestamp' }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], TodoPeriod.prototype, "endedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => todo_entity_1.Todo, (todo) => todo.TodoPeriod),
    (0, typeorm_1.JoinColumn)({ name: 'todo_id' }),
    (0, graphql_1.Field)(() => todo_entity_1.Todo),
    __metadata("design:type", todo_entity_1.Todo)
], TodoPeriod.prototype, "Todo", void 0);
TodoPeriod = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], TodoPeriod);
exports.TodoPeriod = TodoPeriod;
//# sourceMappingURL=todo-period.entity.js.map