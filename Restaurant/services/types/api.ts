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
  user: User;
  token: string;
  passwordReset?: boolean;
}

export type GeneralApiResponse<T = unknown> = {
  message: string;
  data?: T;
  user?: User;
  token?: string;
};
