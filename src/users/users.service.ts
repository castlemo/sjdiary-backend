import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull } from 'typeorm';

import { IAuth0User } from '../auth';
import { UserModel } from '../models';

import { CreateUserInput } from './dto/input';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  @InjectRepository(UsersRepository)
  private readonly userRepo: UsersRepository;

  async verifyUser({ sub }: IAuth0User): Promise<boolean> {
    const user = await this.userRepo.findByAuth0Id(sub);
    return !!user;
  }

  async me(authUser: IAuth0User): Promise<UserModel> {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    return new UserModel(user);
  }

  async createUser(authUser: IAuth0User, input: CreateUserInput) {
    const user = await this.userRepo.save({
      auth0Id: authUser.sub,
      ...input,
    });

    return new UserModel(user);
  }
}
