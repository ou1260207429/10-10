import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuService, SettingsService, TitleService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { ACLService } from '@delon/acl';
import { TranslateService } from '@ngx-translate/core';
// import { I18NService } from '../i18n/i18n.service';
import { environment } from '@env/environment';
import { NzIconService } from 'ng-zorro-antd';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { TokenService } from '@delon/auth';
import { ConfigService } from 'src/app/services/config.service';
import { HttpService } from 'src/app/services/http.service';
registerLocaleData(zh);
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private configService: ConfigService,
    private httpService: HttpService
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  private viaMock(resolve: any, reject: any) {
    // 初始化配置
    this.configService.init().then(res => {
      resolve({});
    }).catch(ex => {
      this.httpService.goTo(`/exception/500`);
      resolve({});
    });
  }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.viaMock(resolve, reject);
    });
  }
}
