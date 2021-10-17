import { InputType, Field } from '@nestjs/graphql';

import { StartOfWeek } from '../../user-setting/user-setting.enum';

@InputType()
export class RegisterUserInput {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  nickname: string;

  @Field()
  motto: string;

  @Field()
  profileImageUrl: string;

  @Field(() => StartOfWeek)
  startOfWeek: StartOfWeek;
}
