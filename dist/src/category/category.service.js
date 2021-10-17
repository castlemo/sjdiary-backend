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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const auth_guard_1 = require("../auth/auth.guard");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const category_entity_1 = require("./category.entity");
let CategoryService = class CategoryService {
    async createCategory(currentUser, createCategoryInput) {
        const _user = await this.userRepo.findOne({ auth0Id: currentUser.sub });
        if (!_user) {
            throw new apollo_server_express_1.ApolloError('[createCategory] this user Not Exist');
        }
        const _category = this.categoryRepo.create({
            name: createCategoryInput.name,
            color: createCategoryInput.color,
            User: _user,
        });
        const category = await this.categoryRepo.save(_category);
        return category;
    }
    async updateCategory(currentUser, categoryId, updateCategoryInput) {
        const _user = await this.userRepo.findOne({ auth0Id: currentUser.sub });
        if (!_user) {
            throw new apollo_server_express_1.ApolloError('[updateCategory] this user Not Exist');
        }
        const _category = await this.categoryRepo.findOne({
            id: categoryId,
            User: _user,
        });
        if (!_category) {
            throw new apollo_server_express_1.ApolloError('[updateCategory] this category Not Exist');
        }
        for (const key in updateCategoryInput) {
            _category[key] = updateCategoryInput[key];
        }
        const category = await this.categoryRepo.save(_category);
        return category;
    }
    async deleteCategory(currentUser, categoryId) {
        const _user = await this.userRepo.findOne({ auth0Id: currentUser.sub });
        if (!_user) {
            throw new apollo_server_express_1.ApolloError('[deleteCategory] this user Not Exist');
        }
        const _category = await this.categoryRepo.findOne({
            id: categoryId,
            User: _user,
        });
        if (!_category) {
            throw new apollo_server_express_1.ApolloError('[deleteCategory] this category Not Exist');
        }
        await this.categoryRepo.softDelete(_category.id);
        return true;
    }
    async getCategories(currentUser) {
        const _user = await this.userRepo.findOne({ auth0Id: currentUser.sub });
        if (!_user) {
            throw new apollo_server_express_1.ApolloError('[getCategories] this user Not Exist');
        }
        const categories = await this.categoryRepo.find({
            where: { User: _user },
            order: { createdAt: 'DESC' },
        });
        return categories;
    }
    async getCategory(currentUser, categoryId) {
        const _user = await this.userRepo.findOne({ auth0Id: currentUser.sub });
        if (!_user) {
            throw new apollo_server_express_1.ApolloError('[getCategory] this user Not Exist');
        }
        const category = await this.categoryRepo.findOne({
            id: categoryId,
            User: _user,
        });
        if (!category) {
            throw new apollo_server_express_1.ApolloError('[getCategory] this category Not Exist');
        }
        return category;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(category_entity_1.Category),
    __metadata("design:type", typeorm_2.Repository)
], CategoryService.prototype, "categoryRepo", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], CategoryService.prototype, "userRepo", void 0);
CategoryService = __decorate([
    (0, common_1.Injectable)()
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map