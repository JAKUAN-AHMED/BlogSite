import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface fullName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface IUser {
  name: fullName;
  email: string;
  password: string;
  role: 'admin' | 'user';
  isBlocked: boolean;
  isDeleted:boolean,
}

export interface IUserModel extends Model<IUser> {
  isPasswordMatch: (
    password: string,
    storedHashedPassword: string,
  ) => Promise<boolean>;
  isUserExistById: (id: string) => Promise<IUser>;
  isUserExistByEmail: (email: string) => Promise<IUser>;
  isDeletedUser: (id: string) => Promise<boolean>;
  UserStatus: (id: string) => Promise<string>;
}

export type TUSER_ROLE = keyof typeof USER_ROLE;