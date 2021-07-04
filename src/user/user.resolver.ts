import { Resolver, Query } from '@nestjs/graphql';

import { User } from './entity/user.entity';

@Resolver()
export class UserResolver {
  @Query(() => Boolean)
  async me(): Promise<boolean> {
    return true;
  }
}
