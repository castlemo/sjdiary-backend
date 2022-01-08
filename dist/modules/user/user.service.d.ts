import { IAuthUser } from 'src/auth';
import { CreateUserInput } from './dto/input';
export declare class UserService {
    private readonly userRepository;
    getUsers(): Promise<import("../../entities").UserEntity[]>;
    getMe(user: IAuthUser): Promise<import("../../entities").UserEntity>;
    createUser(user: IAuthUser, input: CreateUserInput): Promise<{
        email: string;
        name: string;
        profileImageUrl: string;
        auth0Id: string;
    } & import("../../entities").UserEntity>;
}
