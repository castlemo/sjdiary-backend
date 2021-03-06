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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_1 = require("../auth");
const models_1 = require("../models");
const input_1 = require("./dto/input");
const reviews_service_1 = require("./reviews.service");
let ReviewsResolver = class ReviewsResolver {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    async reviews(authUser, input) {
        return await this.reviewService.reviews(authUser, input);
    }
    async createReview(authUser, input) {
        return await this.reviewService.createReview(authUser, input);
    }
    async updateReview(authUser, input) {
        return await this.reviewService.updateReview(authUser, input);
    }
    async deleteReview(authUser, input) {
        return await this.reviewService.deleteReview(authUser, input);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [models_1.ReviewModel]),
    (0, common_1.UseGuards)(auth_1.GqlAuthGuard),
    __param(0, (0, auth_1.Auth0User)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_1.ReviewsInput]),
    __metadata("design:returntype", Promise)
], ReviewsResolver.prototype, "reviews", null);
__decorate([
    (0, graphql_1.Mutation)(() => models_1.ReviewModel),
    (0, common_1.UseGuards)(auth_1.GqlAuthGuard),
    __param(0, (0, auth_1.Auth0User)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_1.CreateReviewInput]),
    __metadata("design:returntype", Promise)
], ReviewsResolver.prototype, "createReview", null);
__decorate([
    (0, graphql_1.Mutation)(() => models_1.ReviewModel),
    (0, common_1.UseGuards)(auth_1.GqlAuthGuard),
    __param(0, (0, auth_1.Auth0User)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_1.UpdateReviewInput]),
    __metadata("design:returntype", Promise)
], ReviewsResolver.prototype, "updateReview", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, common_1.UseGuards)(auth_1.GqlAuthGuard),
    __param(0, (0, auth_1.Auth0User)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_1.DeleteReviewInput]),
    __metadata("design:returntype", Promise)
], ReviewsResolver.prototype, "deleteReview", null);
ReviewsResolver = __decorate([
    (0, graphql_1.Resolver)(() => models_1.ReviewModel),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService])
], ReviewsResolver);
exports.ReviewsResolver = ReviewsResolver;
//# sourceMappingURL=reviews.resolver.js.map