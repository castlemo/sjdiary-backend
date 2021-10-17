import { BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
import { Theme, StartOfWeek } from './user-setting.enum';
export declare class UserSetting extends BaseEntity {
    id: number;
    userId: number;
    theme: Theme;
    startOfWeek: StartOfWeek;
    createdAt: Date;
    updatedAt: Date;
    User: User;
}
