import { Observable, map } from 'rxjs';
import { HttpService } from './http.service';
import { ajax } from 'rxjs/ajax';

export class HttpServiceImpl extends HttpService {
  protected request<R = unknown, D = void>(
    method: string,
    path: string,
    data?: unknown | D
  ): Observable<R> {
    const url = `${path}`;
    return ajax<R>({
      url,
      method,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    }).pipe(map((response) => response.response));
  }

  get<R>(path: string): Observable<R> {
    return this.request<R>('get', path);
  }

  post<D = void, R = D>(path: string, data: D, options: object): Observable<R> {
    return this.request<R, D>('post', path, { ...data, ...options });
  }

  put<R, D = void>(path: string, data: D, options: object): Observable<R> {
    return this.request<R, D>('put', path, { ...data, ...options });
  }

  delete<R>(path: string, options: object): Observable<R> {
    return this.request<R>('delete', path, options);
  }
}
