import { CommonEntity, UserEntity } from './../../entities';
export declare class User extends CommonEntity implements Omit<UserEntity, 'auth0Id' | 'todos' | 'reviews'> {
    email: string;
    name: string;
    profileImageUrl: string;
}
