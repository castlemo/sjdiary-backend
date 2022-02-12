import { IAuth0User } from '../auth';
import { UserModel } from '../models';
import { CreateUserInput } from './dto/input';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private readonly userService;
    constructor(userService: UsersService);
    verifyUser(authUser: IAuth0User): Promise<boolean>;
    me(authUser: IAuth0User): Promise<UserModel>;
    createUser(authUser: IAuth0User, input: CreateUserInput): Promise<UserModel>;
}
