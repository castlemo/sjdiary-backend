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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const todo_entity_1 = require("../todo/todo.entity");
const user_setting_entity_1 = require("../user-setting/user-setting.entity");
const category_entity_1 = require("../category/category.entity");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'auth0_id', unique: true }),
    __metadata("design:type", String)
], User.prototype, "auth0Id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "motto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'profile_image_url', nullable: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "profileImageUrl", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp' }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamp' }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => user_setting_entity_1.UserSetting, (userSetting) => userSetting.User),
    (0, graphql_1.Field)(() => user_setting_entity_1.UserSetting),
    __metadata("design:type", user_setting_entity_1.UserSetting)
], User.prototype, "UserSetting", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => todo_entity_1.Todo, (todo) => todo.User),
    (0, graphql_1.Field)(() => [todo_entity_1.Todo]),
    __metadata("design:type", Array)
], User.prototype, "Todos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => category_entity_1.Category, (category) => category.User),
    (0, graphql_1.Field)(() => [category_entity_1.Category]),
    __metadata("design:type", Array)
], User.prototype, "Categories", void 0);
User = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map