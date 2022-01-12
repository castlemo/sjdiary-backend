import { IAuth0User } from './../../auth/auth.interface';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Auth0User, GqlAuthGuard } from 'src/auth';

import { UserService } from './user.service';
import { CreateUserInput } from './dto/input';
import { User } from './dto/output';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async verifyUser(@Auth0User() authUser: IAuth0User) {
    return this.userService.verifyUser(authUser);
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async users() {
    return this.userService.users();
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
