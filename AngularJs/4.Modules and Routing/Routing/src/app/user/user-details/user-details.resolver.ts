//todo file created manually

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { User } from "src/app/types/User";
import { UserService } from "src/app/users/user.service";

@Injectable({
    providedIn: 'root'
})

export class UserResolver implements Resolve<User> {

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.userService.fetchOneUsers(route.params['id'])
    }
}