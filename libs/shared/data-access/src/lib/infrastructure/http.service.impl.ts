import { Observable } from 'rxjs';
import { HttpService } from './http.service';

export class HttpServiceImpl extends HttpService {
  protected request<R = unknown, D = void>(
    method: string,
    path: string,
    data?: unknown
  ): Observable<R> {
    throw new Error('Method not implemented.');
  }
  get<R>(path: string): Observable<R> {
    throw new Error('Method not implemented.');
  }
  post<D = void, R = D>(path: string, data: D, optios: object): Observable<R> {
    throw new Error('Method not implemented.');
  }
  put<R, D = void>(path: string, data: D, options: object): Observable<R> {
    throw new Error('Method not implemented.');
  }
  delete<R>(path: string, options: object): Observable<R> {
    throw new Error('Method not implemented.');
  }
}
