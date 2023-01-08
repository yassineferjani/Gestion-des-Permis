import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authreq = request;
    const token = this.loginService.getToken();
    if (token != null) {
      authreq = authreq.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }
    console.log(authreq)
    return next.handle(authreq);
  }
    }


export const tokenIntercept = [{ 
  provide: HTTP_INTERCEPTORS, 
  useClass: TokenInterceptor, 
  multi: true }];

