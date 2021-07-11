import { InputType, Field } from '@nestjs/graphql';

import { UpdateUserSettingInput } from './update-user-setting.input';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  nickname: string;

  @Field({ nullable: true })
  motto: string;

  @Field({ nullable: true })
  userSetting: UpdateUserSettingInput;
}
