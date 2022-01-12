import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { IAuth0User } from 'src/auth';
import { IsNull } from 'typeorm';

import { CreateUserInput } from './dto/input';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  @InjectRepository(UserRepository)
  private readonly userRepo: UserRepository;

  async verifyUser(authUser: IAuth0User) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);
    return !!user;
  }

  async users() {
    return await this.userRepo.find({
      where: {
        deletedAt: IsNull(),
      },
    });
  }

  async me(authUser: IAuth0User) {
    return await this.userRepo.findByAuth0Id(authUser.sub);
  }

  async createUser(authUser: IAuth0User, input: CreateUserInput) {
    return await this.userRepo.save({
      auth0Id: authUser.sub,
      ...input,
    });
  }
}
