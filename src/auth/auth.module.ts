import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { JWT } from '../common/constants';

import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: JWT })],
  providers: [JwtStrategy],
  exports: [PassportModule],
})
export class AuthModule {}
