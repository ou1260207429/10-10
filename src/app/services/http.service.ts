import { Injectable, Injector } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Router } from '@angular/router';
import { MessageBox } from './message-box';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ConfigService } from './config.service';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class HttpService {

    constructor(
        private httpClient: _HttpClient,
        private injector: Injector,
        private messageBox: MessageBox,
        private configService: ConfigService,
    ) {
    }

    public goTo(url: string) {
        setTimeout(() => this.injector.get(Router).navigateByUrl(url));
    }

    syncGet(url: string, params?: any, next?: (value) => void, error?: (status: number, msg: any) => void) {
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = this.configService.config.serviceSetting.fireUrl + url;
        }
        return this.httpClient.get(url, params).toPromise().then(res => {
            this.handle(res, next, error);
        }).catch(ex => {
            this.handleError(0, ex.message, error);
        });
    }

    get(url: string, params?: any, next?: (value) => void, error?: (status: number, msg: any) => void, complete?: () => void) {
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = this.configService.config.serviceSetting.fireUrl + url;
        }

        this.handleHttp(this.httpClient.get(url, params), next, error, complete);
    }

    syncPost(url: string, body?: any, params?: any, next?: (value) => void, error?: (status: number, msg: any) => void) {
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = this.configService.config.serviceSetting.fireUrl + url;
        }

        this.httpClient.post(url, body, params).toPromise().then(res => {
            this.handle(res, next, error);
        }).catch(ex => {
            this.handleError(0, ex.message, error);
        });
    }

    post(url: string, body?: any, params?: any, next?: (value) => void, error?: (status: number, msg: any) => void, complete?: () => void) {
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = this.configService.config.serviceSetting.fireUrl + url;
        }

        this.handleHttp(this.httpClient.post(url, body, params), next, error, complete);
    }

    syncPostByFormData(url: string, body?: any, params?: any, next?: (value) => void, error?: (status: number, msg: any) => void) {
        const formData: FormData = new FormData();
        if (body) {
            for (const i in body) {
                if (body[i] && body[i] != null) {
                    formData.append(i, body[i]);
                }
            }
        }

        this.syncPost(url, formData, params, next, error);
    }

    postByFormData<T>(url: string, body?: any, params?: any, next?: (value) => void, error?: (status: number, msg: any) => void, complete?: () => void) {
        const formData: FormData = new FormData();
        if (body) {
            for (const i in body) {
                if (body[i] && body[i] != null) {
                    formData.append(i, body[i]);
                }
            }
        }

        this.post(url, formData, params, next, error, complete);
    }

    handleHttp<T>(subscribeEx: Observable<T>, next?: (value) => void, error?: (status: number, msg: any) => void, complete?: () => void) {
        subscribeEx.subscribe((res: any) => { // 正常返回请求
            this.handle(res, next, error);
        }, err => { // 错误
            this.handleError(0, err.message, error);
        }, () => { // 请求完成
            if (complete) {
                complete();
            }
        });
    }

    handle(res, next, error) {
        if (res.status > 0) {
            if (next) {
                next(res.data);
            }
        } else { // 请求失败
            const err = res.message + '(状态码：' + res.status + ')';
            this.handleError(res.status, err, error);
        }
    }

    handleError(status, errMsg, error) {
        if (status == -401 || status == -4012 || status == -4013) {
            let url = location.href;
            const index = url.indexOf("ticket");
            if (index > 0) {
                const endIndex = url.indexOf("&", index);
                if (endIndex >= 0) {
                    url = url.replace(url.substring(index, endIndex + 1), "");
                } else {
                    url = url.substring(0, index - 1);
                }
            }

            this.goLogin(url);
        } else if (error) {
            error(status, errMsg);
        } else {
            this.messageBox.error(errMsg);
        }
    }

    public goLogin(callback) {
        (this.injector.get(DA_SERVICE_TOKEN) as ITokenService).clear();
        let url = this.configService.config.serviceSetting.loginUrl;
        if (callback == null) {
            callback = location.href;
        }
        url = url + "?callback=" + encodeURIComponent(callback);
        location.href = url;
    }

}
