import { Resolver, Query } from '@nestjs/graphql';

import { TestService } from './test.service';

@Resolver()
export class TestResolver {
  constructor(private readonly testService: TestService) {}

  @Query(() => Boolean)
  async testRawQuery() {
    return await this.testService.testRawQuery();
  }
}
