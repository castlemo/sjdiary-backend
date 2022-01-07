import { EntityRepository, Repository } from 'typeorm';

import { ReviewEntity } from 'src/entities';

@EntityRepository(ReviewEntity)
export class ReviewRepository extends Repository<ReviewEntity> {}
