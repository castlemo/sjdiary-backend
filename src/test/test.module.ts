import { Module } from '@nestjs/common';

import { UserModule } from '../user/user.module';

import { TestResolver } from './test.resolver';
import { TestService } from './test.service';

@Module({
  imports: [UserModule],
  providers: [TestResolver, TestService],
})
export class TestModule {}
