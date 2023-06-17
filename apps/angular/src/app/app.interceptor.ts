import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { AppProgressService } from './app-progress.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private progress: AppProgressService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('progress');

    console.log(this);

    this.progress.show();
    return next.handle(request).pipe(finalize(() => this.progress.hide()));
  }
}
