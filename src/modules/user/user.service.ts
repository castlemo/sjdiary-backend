import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { IAuthUser } from 'src/auth';
import { IsNull } from 'typeorm';

import { CreateUserInput } from './dto/input';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  @InjectRepository(UserRepository)
  private readonly userRepository: UserRepository;

  async users() {
    return await this.userRepository.find({
      where: {
        deletedAt: IsNull(),
      },
    });
  }

  async me(authUser: IAuthUser) {
    return await this.userRepository.findByAuth0Id(authUser.sub);
  }

  async createUser(authUser: IAuthUser, input: CreateUserInput) {
    return await this.userRepository.save({
      auth0Id: authUser.sub,
      ...input,
    });
  }
}
