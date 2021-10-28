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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const apollo_server_errors_1 = require("apollo-server-errors");
const user_setting_entity_1 = require("../user-setting/user-setting.entity");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(connection) {
        this.connection = connection;
    }
    async me(currentUser) {
        const queryResult = await this.userRepo.query(`
      SELECT 
        user.id as id,
        user.auth0_id as auth0Id,
        user.email as email,
        user.name as name,
        user.nickname as nickname,
        user.motto as motto,
        user.profile_image_url as profileImageUrl,
        JSON_OBJECT(
          'id', us.id,
          'userId', us.user_id,
          'theme', us.theme,
          'startOfWeek', us.start_of_week
        ) as UserSetting 
      FROM 
        user 
      LEFT JOIN 
        user_setting as us
      ON 
        user.id = us.user_id 
      WHERE 
        user.auth0_id = ? AND user.deleted_at IS NULL
      ;
      `, [currentUser.sub]);
        if (queryResult.length < 1) {
            throw new apollo_server_errors_1.ApolloError('[me] this queryResult Not Exist');
        }
        return queryResult[0];
    }
    async verifyUser(currentUser) {
        const user = await this.userRepo.findOne({ auth0Id: currentUser.sub });
        if (!!user) {
            return true;
        }
        else {
            return false;
        }
    }
    async registerUser(currentUser, input) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const userExists = await this.userRepo.findOne({
                auth0Id: currentUser.sub,
            });
            if (!!userExists) {
                throw new apollo_server_errors_1.ApolloError('[registerUser] this user Exist');
            }
            const _user = this.userRepo.create(Object.assign({ auth0Id: currentUser.sub }, input));
            const user = await queryRunner.manager.save(_user);
            const _userSetting = this.userSettingRepo.create({
                User: user,
                startOfWeek: input.startOfWeek,
            });
            const userSetting = await queryRunner.manager.save(_userSetting);
            user.UserSetting = userSetting;
            await queryRunner.commitTransaction();
            return user;
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            if (err instanceof apollo_server_errors_1.ApolloError) {
                throw err;
            }
            else {
                throw new apollo_server_errors_1.ApolloError('[registerUser] ', err);
            }
        }
        finally {
            await queryRunner.release();
        }
    }
    async deleteUser(currentUser) {
        const _user = await this.userRepo.findOne({ auth0Id: currentUser.sub });
        if (!_user) {
            throw new apollo_server_errors_1.ApolloError('[deleteUser] this user Not Exist');
        }
        await this.userRepo.softDelete({ id: _user.id });
        return true;
    }
    async updateUser(currentUser, input) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const updateUserInput = {
                motto: input.motto,
                nickname: input.nickname,
            };
            const updateUserSettingInput = input.userSetting;
            const _user = await this.userRepo.findOne({
                where: { auth0Id: currentUser.sub },
                join: {
                    alias: 'user',
                    leftJoinAndSelect: {
                        UserSetting: 'user.UserSetting',
                    },
                },
            });
            if (!_user) {
                throw new apollo_server_errors_1.ApolloError('[updateUser] this user Not Exist');
            }
            for (const key in updateUserInput) {
                _user[key] = updateUserInput[key];
            }
            for (const key in updateUserSettingInput) {
                _user.UserSetting[key] = updateUserSettingInput[key];
            }
            const user = await queryRunner.manager.save(_user);
            const userSetting = await queryRunner.manager.save(_user.UserSetting);
            user.UserSetting = userSetting;
            await queryRunner.commitTransaction();
            return user;
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            if (err instanceof apollo_server_errors_1.ApolloError) {
                throw err;
            }
            else {
                throw new apollo_server_errors_1.ApolloError('[updateUser] ', err);
            }
        }
        finally {
            await queryRunner.release();
        }
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], UserService.prototype, "userRepo", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(user_setting_entity_1.UserSetting),
    __metadata("design:type", typeorm_2.Repository)
], UserService.prototype, "userSettingRepo", void 0);
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map