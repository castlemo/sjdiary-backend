import { Repository } from 'typeorm';
import { UserEntity } from 'src/entities';
export declare class UserRepository extends Repository<UserEntity> {
    findByAuth0Id(auth0Id: string): Promise<UserEntity>;
}
