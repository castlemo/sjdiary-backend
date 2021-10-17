import { InputType, Field } from '@nestjs/graphql';

import { Theme, StartOfWeek } from '../../user-setting/user-setting.enum';

@InputType()
export class UpdateUserSettingInput {
  @Field(() => Theme, { nullable: true })
  theme: Theme;

  @Field(() => StartOfWeek, { nullable: true })
  startOfWeek: StartOfWeek;
}
