import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductFacade, Product } from '@sabadao/shared/data-access';
import { ProductDialog } from './product/product.dialog';

@Component({
  selector: 'sabadao-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';

  displayedColumns = ['id', 'title', 'description', 'actions']

  constructor(
    protected readonly facade: ProductFacade,
    private dialog: MatDialog
  ) {
    this.facade.loadProducts();
  }

  openProduct(data: Product) {
    const ref = this.dialog.open(ProductDialog, { data })
  }
}
