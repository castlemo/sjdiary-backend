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
exports.TodoEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
const common_entity_1 = require("./common.entity");
const TODO = 'todo';
let TodoEntity = class TodoEntity extends common_entity_1.CommonEntity {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], TodoEntity.prototype, "contents", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)({ name: 'started_at', type: 'timestamp' }),
    __metadata("design:type", Number)
], TodoEntity.prototype, "startedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)({ name: 'finished_at', type: 'timestamp' }),
    __metadata("design:type", Number)
], TodoEntity.prototype, "finishedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, typeorm_1.Column)({ name: 'completed_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Number)
], TodoEntity.prototype, "completedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.UserEntity, (user) => user.todos),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", entities_1.UserEntity)
], TodoEntity.prototype, "user", void 0);
TodoEntity = __decorate([
    (0, graphql_1.ObjectType)(TODO),
    (0, typeorm_1.Entity)({
        name: TODO,
    })
], TodoEntity);
exports.TodoEntity = TodoEntity;
//# sourceMappingURL=todo.entity.js.map