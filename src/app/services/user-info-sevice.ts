import { Injectable, Injector, Inject } from '@angular/core';
import { MessageBox } from './message-box';
import { throwError, zip } from 'rxjs';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { environment } from '@env/environment';
import { _HttpClient, SettingsService, TitleService } from '@delon/theme';
import { HttpService } from './http.service';

@Injectable()
export class UserInfoService {

    public userInfo: any = {};

    constructor(
        private httpService: HttpService,
        private settingService: SettingsService,
        @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService
    ) {
    }

    init() {
        this.clear();
        const token = this.tokenService.get();
        if (token != null && token.token != null) {
            return this.httpService.syncGet('/api/v1/Fire/User/GetLoginTokenInfo', null, (res) => {
                this.userInfo = res;
                this.settingService.setUser({ name: res.userName, avatar: null, email: null });
            });
        } else {
            return null;
        }
    }

    clear() {
        this.userInfo = {};
    }
}
