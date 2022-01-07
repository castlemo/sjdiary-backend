import { EntityRepository, Repository } from 'typeorm';

import { UserEntity } from 'src/entities';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}
