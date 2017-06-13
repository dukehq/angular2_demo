import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot }  from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private userService:UserService,
        private router:Router
    ) { }

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        if(this.userService.isLogin){
            return true;
        }
        this.router.navigate(['/admin/login'],{queryParams:{returnUrl:state.url}});
        return false;
    }
}