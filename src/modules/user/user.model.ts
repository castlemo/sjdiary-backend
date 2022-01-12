import { Field, ObjectType } from '@nestjs/graphql';

import { UserEntity, CommonEntity } from 'src/entities';

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
