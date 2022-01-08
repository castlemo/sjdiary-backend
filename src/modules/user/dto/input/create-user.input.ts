import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsUrl } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  @IsUrl()
  profileImageUrl: string;
}
