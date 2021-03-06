import { AuthService } from './../shared/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _auth: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._auth.getToken();
    //console.log("Test INTERCEPTOR: " + request.url);
    if (token) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
      //zum Testen: console.log(authReq);
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
