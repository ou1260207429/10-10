import { Injectable } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';

@Injectable()
export class MessageBox {

    public constructor(
        public message: NzMessageService,
        private modalService: NzModalService) { }

    public success(msg: string) {
        this.message.success(msg);
    }

    warning(msg: string, title: string = null): void {
        if (title == null) {
            title = '警告提示';
        }
        this.modalService.warning({
            nzTitle: title,
            nzContent: msg,
            // nzOnOk: () => console.log('Info OK')
        });
        // this.message.warning(msg);
    }

    info(msg: string): void {
        this.modalService.info({
            nzTitle: '信息提示',
            nzContent: msg,
            // nzOnOk: () => console.log('Info OK')
        });
    }

    error(msg: string): void {
        this.modalService.error({
            nzTitle: '错误提示',
            nzContent: msg
        });
    }

    confirm(msg: string, title: string = null, okFun = null, cancelFun = null): void {
        if (title == null) {
            title = '警告提示';
        }
        this.modalService.confirm({
            nzTitle: title,
            nzContent: msg,
            nzOnOk: okFun,
            nzOnCancel: cancelFun,
        });
    }

}
