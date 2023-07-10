//1. cretae file mamually
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    //2 inject router
    constructor(private router: Router) { }
//3. add built-in method
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.checkIfLogged(state.url)
    }

    // 4. add custom method to check what condition is needed
    checkIfLogged(url:string): boolean {
        return false
    }
}