import { Injector, ElementRef } from '@angular/core';


import { NzModalService, NzMessageService, NzNotificationService } from 'ng-zorro-antd';

import { ModalHelper, TitleService, _HttpClient } from '@delon/theme';


// import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URLConfig } from '@shared/config/host';
export abstract class AccountBase {


    notify: NzNotificationService;

    message: NzMessageService;
    modalService: NzModalService;

    elementRef: ElementRef;
    modalHelper: ModalHelper;
    titleSrvice: TitleService;
    http: _HttpClient;
    /**
     * 保存状态
     */
    saving = false;

    constructor(injector: Injector) {

        this.notify = injector.get(NzNotificationService);

        this.message = injector.get(NzMessageService);
        this.elementRef = injector.get(ElementRef);
        this.modalHelper = injector.get(ModalHelper);
        this.titleSrvice = injector.get(TitleService);
        this.modalService = injector.get(NzModalService);
        this.http = injector.get(_HttpClient);
    }


    countCaptcha = 0;
    isSetCaptcha = false;
    interval$: any;
    // 0登录 1注册 2找回密码
    getServerCaptcha(phone, type) {
        const url = URLConfig.getInstance().REGISTER_URL + "api/User/SendValidationSMS?mobile=" + phone + "&validationCodeType=" + type;

        this.isSetCaptcha = true;

        this.http.post(url).subscribe((res: any) => {

            if (res) {
                if (res.result == 0) {
                    this.startCount();
                } else {
                    this.modalService.info({
                        nzTitle: '提示',
                        nzContent: res.message,
                    });
                }

            }

            this.isSetCaptcha = false;
        },
            err => {

                this.modalService.error({
                    nzTitle: '提示',
                    nzContent: err,
                });
                this.isSetCaptcha = false;
            });

    }

    startCount() {
        this.countCaptcha = 59;
        this.interval$ = setInterval(() => {
            this.countCaptcha -= 1;
            if (this.countCaptcha <= 0) {
                clearInterval(this.interval$);
            }
        }, 1000);
    }


}
