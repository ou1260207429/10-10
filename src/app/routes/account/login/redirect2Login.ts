import { Component, Inject } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ITokenService, DA_SERVICE_TOKEN } from '@delon/auth';

@Component({
    template: '',
})
export class Redirect2Login {
    constructor(
        @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
        private httpService: HttpService
    ) {
        let url = location.origin + "/#" + tokenService.referrer.url;
        if (tokenService.referrer.url == "/account/redirect2Login") {
            tokenService.referrer.url = "/home";
            url = location.origin + "/#/home";
        }
        this.httpService.goLogin(url);
    }

}
