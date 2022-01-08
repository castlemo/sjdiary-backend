import { IAuthUser } from 'src/auth';
import { CreateUserInput } from './dto/input';
export declare class UserService {
    private readonly userRepository;
    users(): Promise<import("../../entities").UserEntity[]>;
    me(authUser: IAuthUser): Promise<import("../../entities").UserEntity>;
    createUser(authUser: IAuthUser, input: CreateUserInput): Promise<{
        email: string;
        name: string;
        profileImageUrl: string;
        auth0Id: string;
    } & import("../../entities").UserEntity>;
}
