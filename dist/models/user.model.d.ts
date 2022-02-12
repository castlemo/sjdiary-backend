import { UserEntity } from './../entities';
export declare class UserModel {
    id: number;
    email: string;
    name: string;
    profileImageUrl: string;
    constructor(userEntity: UserEntity);
}
