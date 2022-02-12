import { Repository } from 'typeorm';
import { UserEntity } from '../entities';
export declare class UsersRepository extends Repository<UserEntity> {
    findByAuth0Id(auth0Id: string): Promise<UserEntity>;
}
