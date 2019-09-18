import { Injectable, Injector, Inject } from '@angular/core';
import { _HttpClient, MenuService, TitleService } from '@delon/theme';
import { MessageBox } from './message-box';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { HttpService } from './http.service';
import { ReuseTabService } from '@delon/abc';

@Injectable()
export class AuthenticationService {

    constructor(
        private httpService: HttpService,
        private messageBox: MessageBox,
        private menuService: MenuService,
        private reuseTabService: ReuseTabService,
        private titleService: TitleService,
        @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService
    ) {
    }

    goHome() {
        this.httpService.goTo('/home');
    }

    // 登录后设置菜单
    setMenu() {
        const token = this.tokenService.get().token;
        if (token != null) {
            const params = {
                userId: this.tokenService.get().id == null ? 0 : this.tokenService.get().id,
                AppId: 1024
            };
            return this.httpService.syncGet('/api/v1/Permissions/Menu/GetMenu', params, (res) => {
                const menus = this.getMenuTree(res);
                const menusRoot = {
                    text: '功能菜单',
                    group: true,
                    hideInBreadcrumb: true,
                    children: menus
                }

                this.menuService.clear();
                this.menuService.add([menusRoot]);
                this.reuseTabService.refresh();
            });
        } else {
            return null;
        }
    }

    getMenuTree(list) {
        let children = null;
        if (list != null) {
            children = [];
            list.forEach(value => {
                const a = {
                    text: value.resName,
                    link: value.resUrl,
                    children: null,
                    group: value.children == null || value.children.length <= 0,
                };
                a.children = this.getMenuTree(value.children);
                children.push(a);
            });

        }
        return children;
    }

    public setToken(data) {
        this.tokenService.clear();
        this.tokenService.set({
            token: data,
            id: data.userId
        });
    }

    // 登录后跳转回调函数
    public goCallback(callback, errorFun) {
        const token = this.tokenService.get();
        if (token != null && token.token != null) {
            this.validateTicket(token.token, res => {
                if (res == 1) {
                    if (callback != null && callback != '') {
                        let url = decodeURIComponent(callback);
                        const index = url.indexOf("?");
                        if (index < 0) {
                            url += '?';
                        } else {
                            url += '&';
                        }
                        url += "ticket=" + token.token;
                        location.href = url;
                    }
                    else {
                        this.httpService.goTo('/home');
                    }
                } else if (errorFun != null) {
                    errorFun();
                }

            }, errorFun);
        }
    }

    // 验证令牌
    public validateTicket(ticket, successFun, errorFun) {
        const data = { allow: true, ticket };
        return this.httpService.syncGet('/api/v1/Permissions/Account/ValidateTicket?allow=true', data, successFun, errorFun);
    }
}
