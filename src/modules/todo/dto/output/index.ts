import { ObjectType } from '@nestjs/graphql';

import { TodoEntity } from 'src/entities';

@ObjectType()
export class Todo extends TodoEntity {}
