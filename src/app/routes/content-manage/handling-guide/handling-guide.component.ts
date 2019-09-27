import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STPage } from '@delon/abc';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
//import { AppManageService } from '../app-manage.service'
import { NzMessageService } from 'ng-zorro-antd';
import { MessageBox } from 'src/app/services/message-box';

import { EngManageService } from '../../engineering-management/engineering-management.service';
import { Router } from '@angular/router';
import { PageDataHelper } from 'src/app/services/page-data-helper';

@Component({
  selector: 'app-content-manage-handling-guide',
  templateUrl: './handling-guide.component.html',
})
export class ContentManageHandlingGuideComponent implements OnInit {
  postmodel = {
    currentPage: 1,
    pageSize: 10,
    sorting: '',
    isAsc: false,
    orderby: "",
    totalCount: 200,
    group: "",
    search: "",
    startTime: null,
    endTime: null,
  }

  formGroup: FormGroup;

  listData;// 接收列表数据
  //接收id数据
  idData;
  draftById;


  pageConfig: STPage = {
    front: false,
    show: true,
  };

  editData: AppModel; // 添加和编辑数据模型

  // fliterForm: FormGroup;

  isEdit = false; // 是否编辑状态

  constructor(
    private formBuilder: FormBuilder,
    private engManageService: EngManageService,
    private messageBox: MessageBox,
    private fb: FormBuilder,
    private router: Router,
  ) {

    this.editData = new AppModel();
    this.listData = PageDataHelper.initPageData();
    this.formGroup = this.fb.group({
      draftName: [null, [Validators.required]],
      applyType: [null, [Validators.required]],
      content: [null],
      draftId: [false],

    });
    this.listData = {};
  }

  ngOnInit() {
    //debugger
    this.getlist();
  }

  // 获取列表
  getlist() {
    this.postmodel.currentPage = this.listData.currentPage;
    // this.postmodel.pageSize = this.listData.pageSize;
    // this.engManageService.GetDraftList(this.postmodel, data => {
    //   this.listData = data;
    // }, () => {
    // });
  }

  //获取ID

  getId() {
    this.engManageService.getDraftById(this.draftById, data => {
      this.idData = data;
    });
  }

  getDraftTypeName(applyType) {
    var draftTypeName = "";
    switch (applyType) {
      case 1: draftTypeName = '设计审查'; break;
      case 2: draftTypeName = '消防验收'; break;
      case 3: draftTypeName = '竣工备案'; break;
    }

    return draftTypeName;
  }


  // 添加
  addDraft() {
    this.engManageService.AddDraft(this.editData, data => {
      this.messageBox.success('添加数据成功');
      this.isEdit = false;
      this.getlist();
    });
  }

  // 编辑
  updateDraft() {
    this.engManageService.UpdateDraft(this.editData, data => {
      this.messageBox.success('修改数据成功');
      this.isEdit = false;
      this.getlist();
    });
  }

  // 搜索
  search() {
    // this.postmodel.draftName = this.postmodel.draftName.trim();
    // this.postmodel.appName = this.postmodel.appName.trim();
    this.listData.currentPage = 1,
      this.getlist()

  };

  // 重置
  reset() {
    this.postmodel = {
      currentPage: 1,
      pageSize: 10,
      sorting: '',
      isAsc: false,
      orderby: "",
      totalCount: 200,
      group: "",
      search: "",
      startTime: null,
      endTime: null,
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

  handleCancel(): void {
    this.isEdit = false;
  }

  detail() {
    this.router.navigate([`/content-manage/handling-guid-detail`]);
  }
  edit(data) {
    this.isEdit = true;
    if (data == null) {//添加
      this.editData.init();
    } else {//编辑
      this.editData.clone(data);


    }
  }
  save(): void {
    if (this.validateForm()) { // TODO: 数据验证
      if (this.editData.draftId == null) { // 添加
        this.addDraft();
      } else { // 编辑
        this.updateDraft();
      }
    }
  }

  protected validateForm(): boolean {
    let result = true;
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
      if (this.formGroup.controls[i].dirty && this.formGroup.controls[i].errors) {
        result = false;
      }
    }
    return result;
  }
}

export class AppModel {
  public draftId;
  public draftName;
  public applyType;
  public content;


  public init() {
    let appTmp = { disable: 0 };
    this.clone(appTmp);
  }

  public clone(data) {
    this.draftId = data.draftId;
    this.draftName = data.draftName;
    this.applyType = data.applyType;
    this.content = data.content;
  }

}

