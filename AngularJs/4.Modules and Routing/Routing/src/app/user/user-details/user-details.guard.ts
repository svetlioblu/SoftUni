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
       // where to redirect in urlTree if checkIg Logged failed 
        return this.checkIfLogged(state.url) || this.router.createUrlTree(['/user-list'])
    }

    // 4. add custom method to check what condition is needed
    checkIfLogged(url:string): boolean {
        //if return false will protect the path
        return true
    }
}