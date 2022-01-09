import { IAuthUser } from './../../auth/auth.interface';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/input';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    verifyUser(authUser: IAuthUser): Promise<boolean>;
    users(): Promise<import("../../entities").UserEntity[]>;
    me(authUser: IAuthUser): Promise<import("../../entities").UserEntity>;
    createUser(authUser: IAuthUser, input: CreateUserInput): Promise<{
        email: string;
        name: string;
        profileImageUrl: string;
        auth0Id: string;
    } & import("../../entities").UserEntity>;
}
