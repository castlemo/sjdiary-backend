import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import {
  GqlAuthGuard,
  CurrentUser,
  Auth0UserInterface,
} from '../auth/auth.guard';
import { User } from './user.entity';
import { UserService } from './user.service';
import { RegisterUserInput, UpdateUserInput } from './input';

import * as Utils from '../common/utils';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async me(@CurrentUser() currentUser: Auth0UserInterface): Promise<User> {
    return await this.userService.me(currentUser);
  }

  @Query(() => Boolean, {
    description:
      'Returns true if user with given Auth0 token, and false otherwise.',
  })
  @UseGuards(GqlAuthGuard)
  async verifyUser(
    @CurrentUser() currentUser: Auth0UserInterface,
  ): Promise<boolean> {
    return await this.userService.verifyUser(currentUser);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async registerUser(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('input') input: RegisterUserInput,
  ): Promise<User> {
    return await this.userService.registerUser(currentUser, input);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteUser(
    @CurrentUser() currentUser: Auth0UserInterface,
  ): Promise<boolean> {
    Utils.consoleLog('deleteUser', [
      { key: 'currentUser', value: currentUser },
    ]);
    return await this.userService.deleteUser(currentUser);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async updateUser(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('input') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return await this.userService.updateUser(currentUser, updateUserInput);
  }
}
