import { Query, Resolver } from '@nestjs/graphql';

import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => Boolean)
  users() {
    return this.userService.getUsers();
  }
}
