import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.method === 'GET'){
            console.log("Adding 'Auth' Header");
            const updatedReq = req.clone({ 
                headers : req.headers.append("Auth","xyz")
            });
            return next.handle(updatedReq);
        }else{
            return next.handle(req);
        }
    }
}