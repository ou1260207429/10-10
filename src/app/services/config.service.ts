import { Injectable, Injector, Inject } from '@angular/core';
import { MessageBox } from './message-box';
import { throwError, zip } from 'rxjs';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { environment } from '@env/environment';
import { _HttpClient, SettingsService, TitleService } from '@delon/theme';

@Injectable()
export class ConfigService {

    public config: any = {};

    constructor(
        private httpClient: _HttpClient,
        private settingService: SettingsService,
        private titleService: TitleService,
    ) {
    }

    init() {
        let envName = '';
        if (environment.production) {
            envName = '.prod';
        } else {
            envName = '.dev';
        }
        const url = '/assets/app-config' + envName + '.json';

        return this.httpClient.get('/assets/app-config.dev.json', null, { responseType: 'json' }).toPromise().then((res) => {
            // 应用信息：包括站点名、描述、年份
            this.settingService.setApp(res.app);
            // 设置页面标题的后缀
            this.titleService.suffix = res.app.name;
            this.config = res;
        });
    }
}
