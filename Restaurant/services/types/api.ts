import {User} from '../../interfaces/user.interface';

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  role: string;
  profile: {
    uri: string;
    type: string;
    name: string;
  };
}

export interface RegisterResponse {
  message: string;
  user: {
    _id: string;
    name: string;
    email: string;
    profile: string;  
  };
  token: string;
  passwordReset?: boolean;
}

export type GeneralApiResponse<T = unknown> = {
  message: string;
  data?: T;
  user?: User;
  token?: string;
};
