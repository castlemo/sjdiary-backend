import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull } from 'typeorm';

import { IAuth0User } from '../auth';

import { CreateUserInput } from './dto/input';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  @InjectRepository(UsersRepository)
  private readonly userRepo: UsersRepository;

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
