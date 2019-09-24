import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable()
export class FlowTemplateService {

    constructor(private httpService: HttpService) { }

    public getFlowTemplateList(roleId, successFun: (data) => void, completeFum: () => void) {
        this.httpService.get('/api/v1/Permissions/Role/GetRoleById', { Id: roleId }, data => {
            successFun(data);
        }, null, completeFum);
    }
}
