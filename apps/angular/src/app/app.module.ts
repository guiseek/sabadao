import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
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
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppInterceptor } from './app.interceptor';
import { AppProgressService } from './app-progress.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: AppProgressService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
    {
      provide: HttpService,
      useClass: HttpClient,
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
