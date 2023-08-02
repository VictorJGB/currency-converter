import { Injectable } from '@angular/core';
import { LoaderService } from '../loader/loader.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

type NewType = HttpHandler;

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService {
  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: NewType): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);

    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.isLoading.next(false);
      })
    );
  }
}
