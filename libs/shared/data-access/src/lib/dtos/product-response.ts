import { Product } from '../entities/product';

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type { ProductResponse };
