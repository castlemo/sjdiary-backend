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
exports.UserSetting = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../user/user.entity");
const user_setting_enum_1 = require("./user-setting.enum");
let UserSetting = class UserSetting extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], UserSetting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], UserSetting.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: user_setting_enum_1.Theme, default: user_setting_enum_1.Theme.DARK }),
    (0, graphql_1.Field)(() => user_setting_enum_1.Theme),
    __metadata("design:type", String)
], UserSetting.prototype, "theme", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'start_of_week',
        type: 'enum',
        enum: user_setting_enum_1.StartOfWeek,
        default: user_setting_enum_1.StartOfWeek.SUNDAY,
    }),
    (0, graphql_1.Field)(() => user_setting_enum_1.StartOfWeek),
    __metadata("design:type", String)
], UserSetting.prototype, "startOfWeek", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp' }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], UserSetting.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamp' }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], UserSetting.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.UserSetting),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    (0, graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], UserSetting.prototype, "User", void 0);
UserSetting = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], UserSetting);
exports.UserSetting = UserSetting;
//# sourceMappingURL=user-setting.entity.js.map