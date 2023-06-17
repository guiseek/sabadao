import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { productFeatureShoppingRoutes } from './product-feature-shopping.routes';
import { ProductFeatureShoppingContainer } from './product-feature-shopping.container';
import { ProductDialog } from './components/product/product.dialog';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(productFeatureShoppingRoutes)
  ],
  declarations: [
    ProductFeatureShoppingContainer,
    ProductDialog
  ],
})
export class ProductFeatureShoppingModule {}
