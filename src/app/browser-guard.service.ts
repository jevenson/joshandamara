import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class BrowserGuard implements CanActivate {

    constructor(private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (navigator.userAgent.match(/Edge/i)) {
            this.router.navigate(['rip']);
            return false;
        }

        return true;
    }
}