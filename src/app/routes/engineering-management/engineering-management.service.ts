import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
type EntityResponseType = HttpResponse<any>;
@Injectable({
    providedIn: 'root',
})
export class EngManageService {
    constructor(private http: _HttpClient, private _http: HttpClient, private httpService: HttpService) { }


    GetDraftList(model: any, successFun: (data) => void, compelteFun: () => void) {
        return this.httpService.post('/api/v1/Fire/Draft/GetDraftList', model, null, successFun, null, compelteFun);
    }
    getDraftById(draftId, successFun: (data) => void) {
        this.httpService.get('/api/v1/Fire/Draft/GetDraftById', { Id: draftId }, data => {
            successFun(data);
        }, null, null);
    }
}
