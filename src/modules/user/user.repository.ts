import { EntityRepository, IsNull, Repository } from 'typeorm';

import { UserEntity } from 'src/entities';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async findByAuth0Id(auth0Id: string) {
    return await this.findOne({
      auth0Id,
      deletedAt: IsNull(),
    });
  }
}
