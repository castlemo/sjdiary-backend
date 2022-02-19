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
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const typeorm_2 = require("typeorm");
const users_1 = require("../users");
const models_1 = require("./../models");
const reviews_repository_1 = require("./reviews.repository");
let ReviewsService = class ReviewsService {
    async reviews(authUser, { startDate, endDate }) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        const reviews = await this.reviewRepo.find({
            where: [
                {
                    user,
                    startedAt: (0, typeorm_2.MoreThanOrEqual)(startDate),
                    deletedAt: (0, typeorm_2.IsNull)(),
                },
                {
                    user,
                    finishedAt: (0, typeorm_2.LessThanOrEqual)(endDate),
                    deletedAt: (0, typeorm_2.IsNull)(),
                },
                {
                    user,
                    startedAt: (0, typeorm_2.IsNull)(),
                    finishedAt: (0, typeorm_2.IsNull)(),
                    deletedAt: (0, typeorm_2.IsNull)(),
                },
            ],
        });
        return reviews.map((review) => new models_1.ReviewModel(review));
    }
    async createReview(authUser, { content, startedAt, finishedAt }) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        const pendingTimeReviews = await this.reviewRepo.find({
            where: [
                {
                    user,
                    startedAt: (0, typeorm_2.IsNull)(),
                    finishedAt: (0, typeorm_2.IsNull)(),
                    deletedAt: (0, typeorm_2.IsNull)(),
                },
            ],
        });
        if (3 < pendingTimeReviews.length) {
            throw new apollo_server_express_1.ApolloError('does not create review');
        }
        const review = await this.reviewRepo.save({
            user,
            content,
            startedAt: startedAt ? new Date(startedAt).toISOString() : undefined,
            finishedAt: finishedAt ? new Date(finishedAt).toISOString() : undefined,
        });
        return new models_1.ReviewModel(review);
    }
    async updateReview(authUser, input) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        if (Object.keys(input).length < 1) {
            throw new apollo_server_express_1.ApolloError('This input is empty');
        }
        const review = await this.reviewRepo.findOne({
            user,
            id: input.id,
        });
        if (input.content) {
            review.content = input.content;
        }
        if (input.startedAt) {
            review.startedAt = new Date(input.startedAt).toISOString();
        }
        if (input.finishedAt) {
            review.finishedAt = new Date(input.finishedAt).toISOString();
        }
        const updatedReview = await this.reviewRepo.save(review);
        return new models_1.ReviewModel(updatedReview);
    }
    async deleteReview(authUser, { id }) {
        try {
            const user = await this.userRepo.findByAuth0Id(authUser.sub);
            await this.reviewRepo.softDelete({ user, id, deletedAt: (0, typeorm_2.IsNull)() });
            return true;
        }
        catch (err) {
            console.error(err);
            return false;
        }
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(reviews_repository_1.ReviewsRepository),
    __metadata("design:type", reviews_repository_1.ReviewsRepository)
], ReviewsService.prototype, "reviewRepo", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(users_1.UsersRepository),
    __metadata("design:type", users_1.UsersRepository)
], ReviewsService.prototype, "userRepo", void 0);
ReviewsService = __decorate([
    (0, common_1.Injectable)()
], ReviewsService);
exports.ReviewsService = ReviewsService;
//# sourceMappingURL=reviews.service.js.map