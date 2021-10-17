import { Auth0UserInterface } from '../auth/auth.guard';
import { User } from './user.entity';
import { UserService } from './user.service';
import { RegisterUserInput, UpdateUserInput } from './input';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    me(currentUser: Auth0UserInterface): Promise<User>;
    verifyUser(currentUser: Auth0UserInterface): Promise<boolean>;
    registerUser(currentUser: Auth0UserInterface, input: RegisterUserInput): Promise<User>;
    deleteUser(currentUser: Auth0UserInterface): Promise<boolean>;
    updateUser(currentUser: Auth0UserInterface, updateUserInput: UpdateUserInput): Promise<User>;
}
