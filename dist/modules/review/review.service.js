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
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_1 = require("../user");
const review_repository_1 = require("./review.repository");
let ReviewService = class ReviewService {
    async reviews(authUser, { startDate, endDate }) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        return this.reviewRepo.find({
            where: {
                user,
                startedAt: (0, typeorm_2.MoreThanOrEqual)(startDate),
                endedAt: (0, typeorm_2.LessThanOrEqual)(endDate),
                deletedAt: (0, typeorm_2.IsNull)(),
            },
            order: {
                startedAt: 'ASC',
            },
        });
    }
    async createReview(authUser, input) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        return await this.reviewRepo.save(Object.assign({ user }, input));
    }
    async updateReview(authUser, input) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        return await this.reviewRepo.save(Object.assign({ user }, input));
    }
    async deleteReview(authUser, { reviewId }) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        return await this.reviewRepo.softDelete({ user, id: reviewId });
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(review_repository_1.ReviewRepository),
    __metadata("design:type", review_repository_1.ReviewRepository)
], ReviewService.prototype, "reviewRepo", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(user_1.UserRepository),
    __metadata("design:type", user_1.UserRepository)
], ReviewService.prototype, "userRepo", void 0);
ReviewService = __decorate([
    (0, common_1.Injectable)()
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map