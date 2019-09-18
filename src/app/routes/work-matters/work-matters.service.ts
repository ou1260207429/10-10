import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
type EntityResponseType = HttpResponse<any>;
@Injectable({
    providedIn: 'root',
})
export class WorkMattersService {
    constructor(private http: _HttpClient, private _http: HttpClient) { }


}
