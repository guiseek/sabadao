import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '@sabadao/product/data-access';

@Component({
  selector: 'product-product',
  templateUrl: './product.dialog.html',
  styleUrls: ['./product.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDialog {
  constructor(@Inject(MAT_DIALOG_DATA) readonly data: Product) {}
}
