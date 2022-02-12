import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Auth0User, GqlAuthGuard, IAuth0User } from '../auth';
import { User } from '../models';

import { CreateUserInput } from './dto/input';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async verifyUser(@Auth0User() authUser: IAuth0User) {
    return await this.userService.verifyUser(authUser);
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async users() {
    return await this.userService.users();
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async me(@Auth0User() authUser: IAuth0User) {
    return await this.userService.me(authUser);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async createUser(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: CreateUserInput,
  ) {
    return await this.userService.createUser(authUser, input);
  }
}
