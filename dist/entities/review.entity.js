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
exports.ReviewEntity = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
const common_entity_1 = require("./common.entity");
let ReviewEntity = class ReviewEntity extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReviewEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'started_at',
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "startedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'finished_at',
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "finishedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.UserEntity, (user) => user.reviews),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", entities_1.UserEntity)
], ReviewEntity.prototype, "user", void 0);
ReviewEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'review',
    })
], ReviewEntity);
exports.ReviewEntity = ReviewEntity;
//# sourceMappingURL=review.entity.js.map