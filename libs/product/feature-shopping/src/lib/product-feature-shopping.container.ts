import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product, ProductFacade } from '@sabadao/shared/data-access';
import { ProductDialog } from './components/product/product.dialog';

@Component({
  selector: 'product-product-feature-shopping',
  templateUrl: './product-feature-shopping.container.html',
  styleUrls: ['./product-feature-shopping.container.scss'],
})
export class ProductFeatureShoppingContainer {
  displayedColumns = ['id', 'title', 'description', 'actions'];

  constructor(
    protected readonly facade: ProductFacade,
    private dialog: MatDialog
  ) {
    this.facade.loadProducts();
  }

  openProduct(data: Product) {
    const ref = this.dialog.open(ProductDialog, { data });
  }
}
