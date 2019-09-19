import { Component, OnInit, } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-app-manage-role-manage',
    templateUrl: './flow-template-list.html',
    providers: []
})
export class FlowTemplateListComponent {

    loading = false; // 列表加载状态
    isEdit = false; // 是否显示编辑
    isAuthorize = false; // 是否授权
    editData = {}; // 编辑数据
    pageData: any; // 分页数据
    searchData: any; // 搜索条件
    selectAppName: string; // 选择应用名称

    // constructor(private roleService: RoleService) {
    //     this.pageData = PageDataHelper.initPageData();
    //     this.searchData = {};
    // }

    // appSelectChange(event) {
    //     if (event != null) {
    //         this.selectAppName = event.name;
    //     } else {
    //         this.selectAppName = null;
    //     }
    // }

    // initAppListComplete() {
    //     this.search();
    // }

    // search() {
    //     PageDataHelper.emptyPageData(this.pageData);
    //     this.goPage();
    // }

    // reset() {
    //     PageDataHelper.emptyPageData(this.pageData);
    //     this.searchData = {};
    //     this.goPage();
    // }

    // goPage() {
    //     this.searchData.disable = -1;
    //     this.searchData.userID = -1;
    //     this.searchData.currentPage = this.pageData.currentPage;
    //     this.searchData.pageSize = this.pageData.pageSize;
    //     this.pageData.items = null;

    //     this.loading = true;
    //     this.roleService.getRoleInfoList(this.searchData, data => {
    //         this.pageData = data;
    //     }, () => {
    //         this.loading = false;
    //     });
    // }

    // edit(data) {
    //     if (data == null) {
    //         data = {};
    //         data.appID = this.searchData.appID;
    //         data.appName = this.selectAppName
    //     }
    //     this.editData = data;
    //     this.isEdit = true;
    // }

    // delete(id: any) {
    // }

    // authorize(data) {
    //     if (data == null) {
    //         data = {};
    //         data.appID = this.searchData.appID;
    //         data.appName = this.selectAppName
    //     }
    //     this.editData = data;
    //     this.isAuthorize = true;
    // }

}
