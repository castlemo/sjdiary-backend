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
exports.UsersResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_1 = require("../auth");
const models_1 = require("../models");
const input_1 = require("./dto/input");
const users_service_1 = require("./users.service");
let UsersResolver = class UsersResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async verifyUser(authUser) {
        return await this.userService.verifyUser(authUser);
    }
    async users() {
        return await this.userService.users();
    }
    async me(authUser) {
        return await this.userService.me(authUser);
    }
    async createUser(authUser, input) {
        return await this.userService.createUser(authUser, input);
    }
};
__decorate([
    (0, graphql_1.Query)(() => Boolean),
    (0, common_1.UseGuards)(auth_1.GqlAuthGuard),
    __param(0, (0, auth_1.Auth0User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "verifyUser", null);
__decorate([
    (0, graphql_1.Query)(() => models_1.User),
    (0, common_1.UseGuards)(auth_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "users", null);
__decorate([
    (0, graphql_1.Query)(() => models_1.User),
    (0, common_1.UseGuards)(auth_1.GqlAuthGuard),
    __param(0, (0, auth_1.Auth0User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "me", null);
__decorate([
    (0, graphql_1.Mutation)(() => models_1.User),
    (0, common_1.UseGuards)(auth_1.GqlAuthGuard),
    __param(0, (0, auth_1.Auth0User)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createUser", null);
UsersResolver = __decorate([
    (0, graphql_1.Resolver)(() => models_1.User),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map