import { Store } from '../base';
import { ProductResponse } from '../dtos';
import { Product } from '../entities';

interface ProductState {
  products: Product[];
  loading: boolean;
}

export class ProductFacade extends Store<ProductState> {
  loading$ = this.select(state => state.loading)
  products$ = this.select(state => state.products)

  constructor() {
    super({
      loading: false,
      products: [],
    });
  }

  loadProducts() {
    this.setState({ loading: true })

    fetch(`https://dummyjson.com/products?limit=10&skip=0`)
    .then((res) => res.json())
    .then(({ products }: ProductResponse) => {
      this.setState({ products, loading: false });
    });
  }
}
