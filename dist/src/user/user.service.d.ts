import { Connection } from 'typeorm';
import { Auth0UserInterface } from '../auth/auth.guard';
import { RegisterUserInput, UpdateUserInput } from './input';
import { User } from './user.entity';
export declare class UserService {
    private readonly connection;
    private readonly userRepo;
    private readonly userSettingRepo;
    constructor(connection: Connection);
    me(currentUser: Auth0UserInterface): Promise<User>;
    verifyUser(currentUser: Auth0UserInterface): Promise<boolean>;
    registerUser(currentUser: Auth0UserInterface, input: RegisterUserInput): Promise<User>;
    deleteUser(currentUser: Auth0UserInterface): Promise<boolean>;
    updateUser(currentUser: Auth0UserInterface, input: UpdateUserInput): Promise<User>;
}
