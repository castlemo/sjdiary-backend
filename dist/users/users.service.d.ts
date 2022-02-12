import { IAuth0User } from '../auth';
import { UserModel } from '../models';
import { CreateUserInput } from './dto/input';
export declare class UsersService {
    private readonly userRepo;
    verifyUser({ sub }: IAuth0User): Promise<boolean>;
    me(authUser: IAuth0User): Promise<UserModel>;
    createUser(authUser: IAuth0User, input: CreateUserInput): Promise<UserModel>;
}
