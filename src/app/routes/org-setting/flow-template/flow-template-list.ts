import { Component, OnInit, } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PageDataHelper } from 'src/app/services/page-data-helper';
import { FlowTemplateService } from 'src/app/services/flow-template.service';
import { MessageBox } from 'src/app/services/message-box';

@Component({
    selector: 'app-app-manage-role-manage',
    templateUrl: './flow-template-list.html',
    providers: [FlowTemplateService]
})
export class FlowTemplateListComponent {

    loading = false; // 列表加载状态
    isEdit = false; // 是否显示编辑
    editData; // 编辑数据
    pageData: any; // 分页数据
    searchData: any; // 搜索条件

    constructor(private flowTemplateService: FlowTemplateService, private messageBox: MessageBox) {
        this.pageData = PageDataHelper.initPageData();
        this.searchData = {};
        this.editData = {};
    }

    initComplete() {
        this.search();
    }

    search() {
        PageDataHelper.emptyPageData(this.pageData);
        this.goPage();
    }

    reset() {
        PageDataHelper.emptyPageData(this.pageData);
        this.searchData = {};
        this.goPage();
    }

    goPage() {
        this.searchData.currentPage = this.pageData.currentPage;
        this.searchData.pageSize = this.pageData.pageSize;
        this.pageData.items = null;

        this.loading = true;
        this.flowTemplateService.getFlowTemplatePage(this.searchData, data => {
            this.pageData = data;
        }, () => {
            this.loading = false;
        });
    }

    // 启用、禁用模板
    enableFlowTemplate(templateId, disable) {
        const data = { templateId: null, disable: null };
        data.templateId = templateId;
        data.disable = disable;
        this.flowTemplateService.enableFlowTemplate(data, res => {
            this.messageBox.success("修改成功");
        }, () => {
            this.goPage();
        });
    }

    edit(data) {
        this.editData.flowTemplateId = data.flowTemplateID;
        this.editData.orgId = data.orgID;
        this.editData.orgName = data.orgName;
        this.isEdit = true;
    }

}
