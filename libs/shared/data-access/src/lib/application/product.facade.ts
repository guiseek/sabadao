import { Store } from '../base';
import { Product } from '../entities';
import { ProductRepository } from '../infrastructure';

interface ProductState {
  products: Product[];
  product: Product | null;
  loading: boolean;
}

export class ProductFacade extends Store<ProductState> {
  loading$ = this.select((state) => state.loading);
  products$ = this.select((state) => state.products);
  product$ = this.select((state) => state.product);

  constructor(private repository: ProductRepository) {
    super({
      loading: false,
      product: null,
      products: [],
    });
  }

  loadProducts() {
    this.setState({ loading: true });

    this.repository
      .findAll()
      .subscribe((products) => this.setState({ products, loading: false }));
  }

  loadProduct(id: number) {
    this.setState({ loading: true });

    this.repository
      .findOne(id)
      .subscribe((product) => this.setState({ product, loading: false }));
  }
}
