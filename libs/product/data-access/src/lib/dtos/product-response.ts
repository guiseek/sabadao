import { Product } from '../entities';

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type { ProductResponse };
