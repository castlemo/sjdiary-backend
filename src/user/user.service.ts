import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, QueryRunner, Repository } from 'typeorm';
import { ApolloError } from 'apollo-server-errors';

import { User } from './entity/user.entity';
import { Auth0UserInterface } from '../auth/auth.guard';
import {
  RegisterUserInput,
  UpdateUserInput,
  UpdateUserSettingInput,
} from './input';
import { UserSetting } from '../user-setting/entity/user-setting.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly userRepo: Repository<User>;
  @InjectRepository(UserSetting)
  private readonly userSettingRepo: Repository<UserSetting>;

  constructor(private readonly connection: Connection) {}

  async me(currentUser: Auth0UserInterface): Promise<User> {
    const me = await this.userRepo.findOne({
      where: { auth0Id: currentUser.sub },
      join: {
        alias: 'user',
        leftJoinAndSelect: {
          UserSetting: 'user.UserSetting',
        },
      },
    });

    if (!me) {
      throw new ApolloError('[me] this user Not Exist');
    }

    return me;
  }

  async verifyUser(currentUser: Auth0UserInterface): Promise<boolean> {
    const _user = await this.userRepo.findOne({ auth0Id: currentUser.sub });

    if (!!_user) {
      return true;
    } else {
      return false;
    }
  }

  async registerUser(
    currentUser: Auth0UserInterface,
    registerUserInput: RegisterUserInput,
  ): Promise<User> {
    const queryRunner: QueryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const userExists = await this.userRepo.findOne({
        auth0Id: currentUser.sub,
      });

      // 유저가 존재하면 Error
      if (!!userExists) {
        throw new ApolloError('[registerUser] this user Exist');
      }

      const _user = this.userRepo.create({
        auth0Id: currentUser.sub,
        email: registerUserInput.email,
        name: registerUserInput.name,
        profileImageUrl: registerUserInput.profileImageUrl,
      });

      const user = await queryRunner.manager.save(_user);

      const _userSetting = this.userSettingRepo.create({ User: user });
      const userSetting = await queryRunner.manager.save(_userSetting);

      user.UserSetting = userSetting;

      await queryRunner.commitTransaction();

      return user;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      if (err instanceof ApolloError) {
        throw err;
      } else {
        throw new ApolloError('[registerUser] ', err);
      }
    } finally {
      await queryRunner.release();
    }
  }

  async deleteUser(currentUser: Auth0UserInterface): Promise<boolean> {
    const _user = await this.userRepo.findOne({ auth0Id: currentUser.sub });

    if (!_user) {
      throw new ApolloError('[deleteUser] this user Not Exist');
    }

    await this.userRepo.softDelete({ id: _user.id });
    return true;
  }

  async updateUser(
    currentUser: Auth0UserInterface,
    input: UpdateUserInput,
  ): Promise<User> {
    const queryRunner: QueryRunner = this.connection.createQueryRunner();

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
        throw new ApolloError('[updateUser] this user Not Exist');
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
    } catch (err) {
      await queryRunner.rollbackTransaction();
      if (err instanceof ApolloError) {
        throw err;
      } else {
        throw new ApolloError('[updateUser] ', err);
      }
    } finally {
      await queryRunner.release();
    }
  }
}
