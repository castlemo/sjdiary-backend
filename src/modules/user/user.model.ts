import { Field, ObjectType } from '@nestjs/graphql';

import { CommonEntity, UserEntity } from './../../entities';

@ObjectType()
export class User
  extends CommonEntity
  implements Omit<UserEntity, 'auth0Id' | 'todos' | 'reviews'>
{
  @Field(() => String)
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  profileImageUrl: string;
}
