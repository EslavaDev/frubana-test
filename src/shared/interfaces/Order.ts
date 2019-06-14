import { Product } from './Product';
export interface Order {
  _id: string;
  user: {
    name: string;
  };
  region_code: string
  routeId: string
  slot: string
  flag?: boolean;
  percentage?: number;
  counter?: number;
  products: Product[]
}
