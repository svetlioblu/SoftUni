
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { EMPTY, Observable, catchError, tap } from 'rxjs';
import { API_URL } from './constants';
import { Provider } from '@angular/core';

export class AppInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req

        if (req.url.startsWith('/api')) {
            request = request.clone({
                url: req.url.replace('/api', API_URL)
            })
        }

        return next.handle(request).pipe(
            tap(
                (req) => console.log(req)
            ),
            // ! can catch all errors. instead of uzing component Observable error
            catchError((err) => {
                if (err.status === 0) {
                    console.error(`Error from Interceptor: ${JSON.stringify(err)}`);
                    return EMPTY
                }
                return [err]
            })
        )
    }
}
// ! set Interceptor to be providable in app.module providers 
export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AppInterceptor
}