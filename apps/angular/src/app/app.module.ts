import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {
  HttpService,
  HttpServiceImpl,
  ProductFacade,
  ProductRepository,
  ProductRepositoryImpl,
} from '@sabadao/shared/data-access';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
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
