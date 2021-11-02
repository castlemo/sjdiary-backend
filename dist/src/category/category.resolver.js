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
exports.CategoryResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const category_service_1 = require("./category.service");
const category_entity_1 = require("./category.entity");
const input_1 = require("./input");
let CategoryResolver = class CategoryResolver {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async getCategory(currentUser, categoryId) {
        return await this.categoryService.getCategory(currentUser, categoryId);
    }
    async getCategories(currentUser) {
        return await this.categoryService.getCategories(currentUser);
    }
    async createCategory(currentUser, createCategoryInput) {
        return await this.categoryService.createCategory(currentUser, createCategoryInput);
    }
    async updateCategory(currentUser, categoryId, updateCategoryInput) {
        return await this.categoryService.updateCategory(currentUser, categoryId, updateCategoryInput);
    }
    async deleteCategory(currentUser, categoryId) {
        return await this.categoryService.deleteCategory(currentUser, categoryId);
    }
};
__decorate([
    (0, graphql_1.Query)(() => category_entity_1.Category),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_guard_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getCategory", null);
__decorate([
    (0, graphql_1.Query)(() => [category_entity_1.Category]),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_guard_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getCategories", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_entity_1.Category),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_guard_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_1.CreateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_entity_1.Category),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_guard_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('categoryId')),
    __param(2, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, input_1.UpdateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "updateCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_guard_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('categoryId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "deleteCategory", null);
CategoryResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryResolver);
exports.CategoryResolver = CategoryResolver;
//# sourceMappingURL=category.resolver.js.map