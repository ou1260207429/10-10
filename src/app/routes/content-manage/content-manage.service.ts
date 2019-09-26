import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
type EntityResponseType = HttpResponse<any>;
@Injectable({
    providedIn: 'root',
})
export class ConManageService {
    constructor(private http: _HttpClient, private _http: HttpClient, private httpService: HttpService) { }


    GetLawList(model: any, successFun: (data) => void, compelteFun: () => void) {
        return this.httpService.post('/api/v1/Fire/ContentManagement/GetLawList', model, null, successFun, null, compelteFun);
    }
}
