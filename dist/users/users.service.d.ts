import { IAuth0User } from '../auth';
import { CreateUserInput } from './dto/input';
export declare class UsersService {
    private readonly userRepo;
    verifyUser(authUser: IAuth0User): Promise<boolean>;
    users(): Promise<import("../entities").UserEntity[]>;
    me(authUser: IAuth0User): Promise<import("../entities").UserEntity>;
    createUser(authUser: IAuth0User, input: CreateUserInput): Promise<{
        email: string;
        name: string;
        profileImageUrl: string;
        auth0Id: string;
    } & import("../entities").UserEntity>;
}
