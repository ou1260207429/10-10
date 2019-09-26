import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STPage } from '@delon/abc';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
//import { AppManageService } from '../app-manage.service'
import { NzMessageService } from 'ng-zorro-antd';
import { MessageBox } from 'src/app/services/message-box';

import { EngManageService } from '../../engineering-management/engineering-management.service';
import { Router } from '@angular/router';
import { ConManageService } from '../content-manage.service';
import { PageDataHelper } from 'src/app/services/page-data-helper';

@Component({
  selector: 'app-content-manage-policies-and-regulations',
  templateUrl: './policies-and-regulations.component.html',
})
export class ContentManagePoliciesAndRegulationsComponent implements OnInit {
  postmodel = {
    regulationTypeId: '',
    contentUrl: '',
    coverUrl: '',
    createTime: '',
    disable: 0,
    issueDate: '',
    issueOrg: '',
    lastUpdateTime: '',
    lastUpdateUserName: '',
    regulationCode: '',
    regulationId: 0,
    title: '',
    visitCount: '',
    currentPage: 1,
    pageSize: 10,
    sorting: '',
    startDateTime: '',
    endDateTime: '',
  }
  //nzPlaceHolder = ['发布开始时间', '发布结束时间']
  formGroup: FormGroup;

  listData;// 接收列表数据


  pageConfig: STPage = {
    front: false,
    show: true,
  };

  // editData: AppModel; // 添加和编辑数据模型

  // fliterForm: FormGroup;

  //isEdit = false; // 是否编辑状态

  constructor(
    private formBuilder: FormBuilder,
    private engManageService: EngManageService,
    private messageBox: MessageBox,
    private fb: FormBuilder,
    private router: Router,
    private conManageService: ConManageService,

  ) {

    // this.editData = new AppModel();
    // this.listData = PageDataHelper.initPageData();
    // this.formGroup = this.fb.group({
    //   draftName: [null, [Validators.required]],
    //   applyType: [null, [Validators.required]],
    //   content: [null],
    //   draftId: [false],

    // });
    this.listData = {};
  }

  ngOnInit() {
    //debugger
    this.getlist();
  }

  // 获取列表
  getlist() {
    this.postmodel.currentPage = this.listData.currentPage;
    this.postmodel.pageSize = this.listData.pageSize;
    this.conManageService.GetLawList(this.postmodel, data => {
      this.listData = data;
    }, () => {
    });
  }

  getRegulationTypeName(regulationTypeId) {
    var regulationTypeName = "";
    switch (regulationTypeId) {
      case '1': regulationTypeName = '法律法规'; break;
      case '2': regulationTypeName = '规范性文件'; break;

    }

    return regulationTypeName;
  }


  // 添加
  addDraft() {
    // this.engManageService.AddDraft(this.editData, data => {
    //   this.messageBox.success('添加数据成功');
    //   this.isEdit = false;
    //   this.getlist();
    // });
  }

  // 编辑
  updateDraft() {
    // this.engManageService.UpdateDraft(this.editData, data => {
    //   this.messageBox.success('修改数据成功');
    //   this.isEdit = false;
    //   this.getlist();
    // });
  }

  // 搜索
  search() {
    this.postmodel.title = this.postmodel.title.trim();
    //this.postmodel.appName = this.postmodel.appName.trim();
    this.listData.currentPage = 1,
      this.getlist()

  };

  // 重置
  reset() {
    this.postmodel = {
      regulationTypeId: '',
      contentUrl: '',
      coverUrl: '',
      createTime: '',
      disable: 0,
      issueDate: '',
      issueOrg: '',
      lastUpdateTime: '',
      lastUpdateUserName: '',
      regulationCode: '',
      regulationId: 0,
      title: '',
      visitCount: '',
      currentPage: 1,
      pageSize: 10,
      sorting: '',
      startDateTime: '',
      endDateTime: '',
    }


    this.listData.currentPage = 1;
    this.getlist();
  }

  change(v) {
    if (this.listData.currentPage == v.pi) {
      return
    }

    this.listData.currentPage = v.pi;
    this.getlist()
  }

  goPage(event) {
    const page = event;
    this.postmodel.currentPage = page;
    this.getlist();
    // this.loading = true;
  }

  // handleCancel(): void {
  //   //this.isEdit = false;
  // }

  //详情
  detail() {
    this.router.navigate([`/content-manage/policies-and-regulations-details`, { operate: 1 }]);
  }

  edit() {
    this.router.navigate([`/content-manage/policies-and-regulations-details`, { operate: 2 }]);
  }
  add() {
    this.router.navigate([`/content-manage/policies-and-regulations-details`, { operate: 0 }]);
  }

  //删除
  delete() {

  }
  // save(): void {
  //   if (this.validateForm()) { // TODO: 数据验证
  //     if (this.editData.draftId == null) { // 添加
  //       this.addDraft();
  //     } else { // 编辑
  //       this.updateDraft();
  //     }
  //   }
  // }

  //   protected validateForm(): boolean {
  //     let result = true;
  //     for (const i in this.formGroup.controls) {
  //       this.formGroup.controls[i].markAsDirty();
  //       this.formGroup.controls[i].updateValueAndValidity();
  //       if (this.formGroup.controls[i].dirty && this.formGroup.controls[i].errors) {
  //         result = false;
  //       }
  //     }
  //     return result;
  //   }
}

// export class AppModel {
//   public draftId;
//   public draftName;
//   public applyType;
//   public content;


//   public init() {
//     let appTmp = { disable: 0 };
//     this.clone(appTmp);
//   }

//   public clone(data) {
//     this.draftId = data.draftId;
//     this.draftName = data.draftName;
//     this.applyType = data.applyType;
//     this.content = data.content;
//   }

// }

