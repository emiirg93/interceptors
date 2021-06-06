import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     const headers = new HttpHeaders({
      'token-usuario': 'ASDASD56465A65SD'
    });

    const requestClone = req.clone({
      headers
    });

    return next.handle(requestClone).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(err: HttpErrorResponse) {
    console.log('Sucedió un error');
    console.log('Registrado en el log file');
    console.warn(err);
    return throwError('Error Personalizado');
  }
}
