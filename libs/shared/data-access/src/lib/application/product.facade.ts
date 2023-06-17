import { Store } from '../base';
import { ProductResponse } from '../dtos';
import { Product } from '../entities';
import { HttpService } from '../infrastructure';

interface ProductState {
  products: Product[];
  loading: boolean;
}

export class ProductFacade extends Store<ProductState> {
  loading$ = this.select((state) => state.loading);
  products$ = this.select((state) => state.products);

  constructor(private http: HttpService) {
    super({
      loading: false,
      products: [],
    });
  }

  loadProducts() {
    this.setState({ loading: true });

    this.http
      .get<ProductResponse>(`https://dummyjson.com/products?limit=10&skip=0`)
      .subscribe(({ products }) => this.setState({ products }));
  }
}
