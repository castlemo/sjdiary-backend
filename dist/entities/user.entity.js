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
exports.UserEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
const common_entity_1 = require("./common.entity");
const USER = 'user';
let UserEntity = class UserEntity extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'auth0_id' }),
    __metadata("design:type", String)
], UserEntity.prototype, "auth0Id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "profileImageUrl", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.TodoEntity, (todo) => todo.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "todos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.ReviewEntity, (review) => review.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "reviews", void 0);
UserEntity = __decorate([
    (0, graphql_1.ObjectType)(USER),
    (0, typeorm_1.Entity)({
        name: USER,
    })
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map