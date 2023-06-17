import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {
  HttpService,
  HttpServiceImpl,
  ProductFacade,
  ProductRepository,
  ProductRepositoryImpl,
} from '@sabadao/shared/data-access';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDialog } from './product/product.dialog';
@NgModule({
  declarations: [AppComponent, ProductDialog],
  imports: [
    BrowserModule,
    MatTableModule,
    MatDialogModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HttpService,
      useClass: HttpServiceImpl,
    },
    {
      provide: ProductRepository,
      useClass: ProductRepositoryImpl,
      deps: [HttpService],
    },
    {
      provide: ProductFacade,
      deps: [ProductRepository],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
