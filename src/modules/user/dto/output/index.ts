import { ObjectType } from '@nestjs/graphql';

import { UserEntity } from 'src/entities';

@ObjectType()
export class User extends UserEntity {}
