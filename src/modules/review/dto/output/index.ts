import { ObjectType } from '@nestjs/graphql';

import { ReviewEntity } from 'src/entities';

@ObjectType()
export class Review extends ReviewEntity {}
