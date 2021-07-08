import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserSettingModule } from '../user-setting/user-setting.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UserSettingModule],
  providers: [UserService, UserResolver],
  exports: [TypeOrmModule],
})
export class UserModule {}
