import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STPage } from '@delon/abc';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
//import { AppManageService } from '../app-manage.service'
import { NzMessageService } from 'ng-zorro-antd';
import { MessageBox } from 'src/app/services/message-box';
//import { PageDataHelper } from 'src/app/model/page-data-helper';
// import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-warning-center-warning-center',
  templateUrl: './warning-center.component.html',
})
export class WarningCenterWarningCenterComponent implements OnInit {
  postmodel = {
    appName: '',
    appCode: '',
    disable: -1,
    userID: 0,
    currentPage: 1,
    pageSize: 10,
    sorting: '',
    // startDateTime: "2019-8-10",
    // endDateTime: "2019-8-20"
  }

  formGroup: FormGroup;

  listData;// 接收应用列表数据


  pageConfig: STPage = {
    front: false,
    show: true,
  };

  editData: AppModel; // 添加和编辑数据模型

  // fliterForm: FormGroup;

  isEdit = false; // 是否编辑状态

  constructor(
    private formBuilder: FormBuilder,
    //  private AppManageService: AppManageService,
    private messageBox: MessageBox,
    private fb: FormBuilder,

  ) {

    this.editData = new AppModel();
    //this.listData = PageDataHelper.initPageData();
    this.formGroup = this.fb.group({
      appCode: [null, [Validators.required]],
      appName: [null, [Validators.required]],
      appType: [null, [Validators.required]],
      host: [null],
      isClusteredApp: [null],
      disable: [false],
      userID: [false],
      appID: [false],
    });
    this.listData = {};
  }

  ngOnInit() {
    //debugger
    this.getlist();
  }

  // 获取列表
  getlist() {
    // this.postmodel.currentPage = this.listData.currentPage;
    // this.postmodel.pageSize = this.listData.pageSize;
    // this.AppManageService.GetAppManageList(this.postmodel, data => {
    //   this.listData = data;
    // }, () => {
    // });
  }

  getAppTypeName(appType) {
    var appTypeName = "";
    switch (appType) {
      case 1: appTypeName = 'bs'; break;
      case 2: appTypeName = 'cs'; break;
      case 3: appTypeName = 'app'; break;
    }

    return appTypeName;
  }


  // 添加
  addapp() {
    // this.AppManageService.AddApp(this.editData, data => {
    //   this.messageBox.success('添加数据成功');
    //   this.isEdit = false;
    //   this.getlist();
    // });
  }

  // 编辑
  editapp() {
    // this.AppManageService.UpdateApp(this.editData, data => {
    //   this.messageBox.success('修改数据成功');
    //   this.isEdit = false;
    //   this.getlist();

    // });
  }

  // 搜索
  search() {
    this.postmodel.appCode = this.postmodel.appCode.trim();
    this.postmodel.appName = this.postmodel.appName.trim();
    this.listData.currentPage = 1,
      this.getlist()

  };

  // 重置
  reset() {
    this.postmodel = {
      appName: "",
      appCode: "",
      disable: -1,
      userID: -1,
      currentPage: 1,
      pageSize: 10,
      sorting: "",
      // startDateTime: "2019-8-10",
      // endDateTime: "2019-8-20"
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
    this.postmodel.currentPage = event;
    this.getlist();
    // this.loading = true;
  }

  handleCancel(): void {
    this.isEdit = false;
  }


  edit(data) {
    this.isEdit = true;
    if (data == null) {//添加
      this.editData.init();
    } else {//编辑
      // debugger
      this.editData.clone(data);


    }
  }
  save(): void {
    if (this.validateForm()) { // TODO: 数据验证
      if (this.editData.appID == null) { // 添加
        this.addapp();
      } else { // 编辑
        this.editapp();
      }
    }
    // this.isEdit = false;
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
  public appID;
  public appName: string
  public appCode;
  public isClusteredApp;
  public host;
  public appType;
  public disable;
  public userID;

  public init() {
    let appTmp = { disable: 0 };
    this.clone(appTmp);
  }

  public clone(data) {
    this.appID = data.appID;
    this.appName = data.appName;
    this.appCode = data.appCode;
    this.isClusteredApp = data.isClusteredApp;
    this.host = data.host;
    this.appType = data.appType;
    this.disable = data.disable;
    this.userID = data.userID;

  }

}

