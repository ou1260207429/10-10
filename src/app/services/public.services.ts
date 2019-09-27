
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * 对接谢峰的表单接口和流程接口
 */
@Injectable()
export class PublicServices {
    constructor(public http: HttpClient) { }
    /**
     * 统一上传
     */

    upload(page: any): Observable<any> {
        // return this.http.post(URLConfig.getInstance().REGISTER_URL + "api/Upload/Upload", page
        // );
        return null;
    }
    newUpload(files: any, params): Observable<any> {
        // let url = "api/Upload/Upload?" + "AppId=" + params.AppId + "&module=" + params.module + "&sourceId=" + params.sourceId;
        // return this.http.post(URLConfig.getInstance().REGISTER_URL + url, files, {
        //     headers: new HttpHeaders({
        //         responseType: 'text'
        //     }),
        // },
        // );
        return null;
    }
    /**
     * 获取附件信息
     */
    getFilesDetail(page: any): Observable<any> {
        // let url = "api/Attachment/AttachmentListBySourceId?" + "appId=" + page.AppId + "&module=" + page.module + "&sourceId=" + page.sourceId

        // return this.http.post(URLConfig.getInstance().REGISTER_URL + url, page
        // );
        return null;
    }
    delete(page: any): Observable<any> {
        // let url = "api/Attachment/Delete?" + "appId=" + page.AppId + "&id=" + page.id
        // return this.http.post(URLConfig.getInstance().REGISTER_URL + url, page);
        return null;
    }

    /**
   * 获取审批单位
   */
    getOrganizationTree() {
        // return this.http.get(URLConfig.getInstance().SERVER_URL + 'api/services/app/ProjectFlowServcie/GetOrganizationTree');
        return null;
    }
}

export interface UploadFileModel {
    files: Array<any>,
    AppId: string,
    module?: string,
    sourceId?: string,
}

