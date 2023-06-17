import { Observable, map } from 'rxjs';
import { Product } from '@sabadao/shared/data-access';
import { ProductRepository } from './product.repository';
import { HttpService } from '@sabadao/shared/data-access';
import { ProductResponse } from '../dtos';

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private readonly httpService: HttpService) {}

  findOne(id: number) {
    return this.httpService.get<Product>(
      `https://dummyjson.com/products/${id}`
    );
  }
  findAll(skip = 0, limit = 10): Observable<Product[]> {
    return this.httpService
      .get<ProductResponse>(
        `https://dummyjson.com/products/?limit=${limit}&skip=${skip}`
      )
      .pipe(map((response) => response.products));
  }
}
