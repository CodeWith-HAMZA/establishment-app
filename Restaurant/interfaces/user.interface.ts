type UserRoles = 'user' | 'owner';
export interface User {
  _id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
    country: string;
  };
  phone?: string;
  profile?: string;
  role: UserRoles;
  email: string;
  isVerified: boolean;
  createdAt: string;
}
