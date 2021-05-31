import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('api.openweathermap.org')) {
      const paramReq = req.clone({
        setParams: {
          'appid': environment.api_key,
        }
      });
      return next.handle(paramReq);
    } else {
      return next.handle(req);
    }

  }
}
