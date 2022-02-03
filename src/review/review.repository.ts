import { EntityRepository, Repository } from 'typeorm';

import { ReviewEntity } from '../entities';

@EntityRepository(ReviewEntity)
export class ReviewRepository extends Repository<ReviewEntity> {}
