import { Observable } from 'rxjs';
import { Product } from '../entities';

export abstract class ProductRepository {
  abstract findOne(id: number): Observable<Product>;
  abstract findAll(): Observable<Product[]>;
}
