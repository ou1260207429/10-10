import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable()
export class FlowTemplateService {

    constructor(private httpService: HttpService) { }

    // 获取模板分页
    public getFlowTemplatePage(data, successFun: (data) => void, completeFum: () => void) {
        this.httpService.post('/api/v1/Fire/FlowTemplate/GetFlowTemplatePage', data, null, res => {
            successFun(res);
        }, null, completeFum);
    }

    // 获取模板和节点
    public getFlowTemplateAndNode(flowTemplateId, successFun: (data) => void, completeFum: () => void) {
        this.httpService.post('/api/v1/Fire/FlowTemplate/GetFlowTemplateAndNode', null, { templateId: flowTemplateId }, successFun, null, completeFum);
    }

    // 启用禁用模板
    public enableFlowTemplate(data, successFun: (data) => void, completeFum: () => void) {
        this.httpService.post('/api/v1/Fire/FlowTemplate/EnableFlowTemplate', null, data, res => {
            successFun(res);
        }, null, completeFum);
    }

    // 更新模板
    public updateFlowTemplate(data, successFun: (data) => void, completeFum: () => void) {
        this.httpService.post('/api/v1/Fire/FlowTemplate/UpdateFlowTemplate', data, null, res => {
            successFun(res);
        }, null, completeFum);
    }
}
