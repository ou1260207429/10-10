import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { JWTGuard, SimpleGuard, DelonAuthConfig, ITokenService, DA_SERVICE_TOKEN } from '@delon/auth';
import { Injector, Injectable, Inject } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { UrlHelper } from './url-helper';

@Injectable({
    providedIn: 'root'
})
export class CustomGuard extends SimpleGuard {

    private tokenService;
    private injectorEx;
    constructor(@Inject(DA_SERVICE_TOKEN) tokenService: ITokenService,
        injectorEx: Injector,
        cog: DelonAuthConfig,
        private authenticationService: AuthenticationService) {
        super(tokenService, injectorEx, cog);
        this.injectorEx = injectorEx;
        this.tokenService = tokenService;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const ticket = route.queryParams.ticket;
        if (ticket && ticket != null) {
            this.authenticationService.setToken(ticket);
            let url = state.url;
            url = UrlHelper.deleteParam(url, "ticket");
            location.href = url;
            // let promise = this.injectorEx.get(AccountService).validateTicket(ticket, data => {
            //     this.injectorEx.get(UserService).clearLogin();
            //     this.tokenService.set({ token: data });
            //     let url = state.url.replace("&ticket=" + ticket, "");
            //     url = url.replace("ticket=" + ticket, "");
            //     // location.href=url;
            //     this.injectorEx.get(Router).navigateByUrl(url);
            // });

            return false;
        }

        return super.canActivate(route, state);
    }
}