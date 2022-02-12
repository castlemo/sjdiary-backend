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
exports.ReviewModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const entities_1 = require("./../entities");
let ReviewModel = class ReviewModel {
    constructor(review) {
        this.id = review.id;
        this.content = review.content;
        this.startedAt = review.startedAt
            ? new Date(review.startedAt).getTime()
            : undefined;
        this.finishedAt = review.finishedAt
            ? new Date(review.finishedAt).getTime()
            : undefined;
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], ReviewModel.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ReviewModel.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], ReviewModel.prototype, "startedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], ReviewModel.prototype, "finishedAt", void 0);
ReviewModel = __decorate([
    (0, graphql_1.ObjectType)(),
    __metadata("design:paramtypes", [entities_1.ReviewEntity])
], ReviewModel);
exports.ReviewModel = ReviewModel;
//# sourceMappingURL=review.model.js.map