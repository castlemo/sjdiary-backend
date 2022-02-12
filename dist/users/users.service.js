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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const models_1 = require("../models");
const users_repository_1 = require("./users.repository");
let UsersService = class UsersService {
    async verifyUser({ sub }) {
        const user = await this.userRepo.findByAuth0Id(sub);
        return !!user;
    }
    async me(authUser) {
        const user = await this.userRepo.findByAuth0Id(authUser.sub);
        return new models_1.UserModel(user);
    }
    async createUser(authUser, input) {
        const user = await this.userRepo.save(Object.assign({ auth0Id: authUser.sub }, input));
        return new models_1.UserModel(user);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(users_repository_1.UsersRepository),
    __metadata("design:type", users_repository_1.UsersRepository)
], UsersService.prototype, "userRepo", void 0);
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map