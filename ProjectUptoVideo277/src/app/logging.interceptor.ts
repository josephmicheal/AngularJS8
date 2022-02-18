import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoggingInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Logging : Request to be made, now it interceptor");
        console.log(req.headers);
        return next.handle(req).pipe(tap( event => {
            console.log(event);
            if(event.type === HttpEventType.Response){
                console.log("Logging : Response received in interceptor");
                console.log(event.body);
            }
        }))
    }    
}