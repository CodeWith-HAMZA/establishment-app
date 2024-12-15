import {Category} from './category.interface';
import {Feature} from './feature.interface';
import {User} from './user.interface';

export interface Place {
  _id: string;  
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  category: Category | string;  
  owner?: User | string;  
  images?: string[];  
  features?: Feature[] | string[];
  description?: string;
  rating: number;  
  createdAt: string;  
}
