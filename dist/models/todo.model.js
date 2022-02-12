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
exports.TodoModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const todo_entity_1 = require("./../entities/todo.entity");
let TodoModel = class TodoModel {
    constructor(todo) {
        this.id = todo.id;
        this.content = todo.content;
        this.startedAt = todo.startedAt
            ? new Date(todo.startedAt).getTime()
            : undefined;
        this.finishedAt = todo.finishedAt
            ? new Date(todo.finishedAt).getTime()
            : undefined;
        this.completedAt = todo.completedAt
            ? new Date(todo.completedAt).getTime()
            : undefined;
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], TodoModel.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], TodoModel.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], TodoModel.prototype, "startedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], TodoModel.prototype, "finishedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], TodoModel.prototype, "completedAt", void 0);
TodoModel = __decorate([
    (0, graphql_1.ObjectType)(),
    __metadata("design:paramtypes", [todo_entity_1.TodoEntity])
], TodoModel);
exports.TodoModel = TodoModel;
//# sourceMappingURL=todo.model.js.map