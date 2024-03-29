import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { PublicModel } from 'infrastructure/public-model';
// import { timeTrans, createguid } from 'infrastructure/regular-expression';
import { NzMessageService, UploadFile, UploadFilter } from 'ng-zorro-antd';
// import { EventEmiter } from 'infrastructure/eventEmiter';
// import { UploadFileModel, PublicServices } from 'services/public.services';
import { Buffer } from "buffer"
// import { AppId } from 'infrastructure/expression';
import lodash from 'lodash';
import { PublicServices } from 'src/app/services/public.services';


@Component({
  selector: 'app-content-manage-policies-and-regulations-details',
  templateUrl: './policies-and-regulations-details.component.html',
  styleUrls: ['./policies-and-regulations-details.less']

})
export class ContentManagePoliciesAndRegulationsDetailsComponent implements OnInit {
  fileUrl: string
  fileUrlList = []
  operate
  // 0是新增  1是查看 2是编辑
  type
  id

  fileList: any = [];
  uploading = false;
  // acceptType: ".doc,.docx,.xls,.xlsx,.pdf"
  acceptType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  // uploadUrl = "http://demo.rjtx.net:5001/api/Upload/Upload"
  files = []
  AppId;
  sourceId: string

  // 表单对象
  data: any = {
    title: '',
    issueOrg: '',
    regulationTypeId: '',
    issueDate: '',
    content: '',
  };
  editorParams = {
    sourceId: "",
    // AppId: AppId,
    module: "table",
  }
  editContent: any;
  RegulationType: any
  constructor(
    private _publicServices: PublicServices,
    // private _eventEmiter: EventEmiter,
    private message: NzMessageService,
    // private _regulationServiceProxy: RegulationServiceProxy, 
    private _activatedRoute: ActivatedRoute) {
    this.id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this.operate = parseInt(this._activatedRoute.snapshot.paramMap.get('operate'));
    this.initType();
    this.fileUrl = null;

  }
  ngOnInit() {
    this.init()
  }
  init() {
    // this.data = new RegulationDto();

    // if (this.operate == 0) {
    //   this.sourceId = createguid();
    //   this.editorParams.sourceId = this.sourceId;
    // } else {
    //   this.getRegulationDetailsByIdAsync()
    // }

  }
  /**
   * 获取类型
   */
  initType() {
    // this._regulationServiceProxy.getDropdownTypeByEnumType("RegulationType").subscribe((data: any) => {
    //   this.RegulationType = data
    // })
  }

  /**
   * 获取详情
   */
  getRegulationDetailsByIdAsync() {
    // this._regulationServiceProxy.getRegulationDetailsByIdAsync(this.id).subscribe((data: any) => {
    //   this.data = data
    //   this.data.regulationId = this.id;
    //   this.queryFiles(data.guid)
    //   this.sourceId = data.guid
    //   this.editorParams.sourceId = data.guid;
    //   this.data = {
    //     id: data.id,
    //     content: data.content,
    //     guid: data.guid,
    //     issueDate: this.data.issueDate ? timeTrans(this.data.issueDate) : '',
    //     issueOrg: data.issueOrg,
    //     regulationCode: data.regulationCode,
    //     regulationTypeId: data.regulationTypeId,
    //     title: data.title,
    //   }
    // })
  }

  /**
   * 删除对象多余的属性
   * @param data 对象
   * @param arr 删除的属性数组
   */
  deleteSum(data: any, arr: Array<any>) {
    arr.forEach(item => {
      delete data[item]
    })
  }
  goBack() {
    history.go(-1);
  }
  /**
   * 提交
   */
  save() {
    // if (this.operate == 0) {
    //   this.data.guid = this.sourceId;
    // } else {
    //   this.data.regulationId = this.id;
    // }
    // if (this.data.issueDate) {
    //   this.data.issueDate = new Date(timeTrans(this.data.issueDate));
    // }
    // this.data.content = new Buffer(this.editContent).toString('base64');
    // const src = this.operate == 0 ? this._regulationServiceProxy.addRegulationAsync(this.data) : this._regulationServiceProxy.editRegulationAsync(this.data)
    // src.subscribe(data => {
    //   const name = this.operate == 0 ? '新增成功' : '修改成功';
    //   this.message.success(name);
    //   this._eventEmiter.emit('init', []);
    // })
    // this.goBack()
  }
  /**
   * 上传文件
   */
  uploadFiles(guid) {
    const params = {
      // sourceId: guid,
      // AppId: AppId,
      // module: "table",
    }

    this.fileList.forEach((file: any) => {
      const formData = new FormData();
      formData.append('files', file);
      this._publicServices.newUpload(formData, params).subscribe(data => {
      })
    });
  }
  queryFiles(guid) {
    // let params = {
    //   sourceId: guid,
    //   AppId: AppId,
    //   module: "table",
    // }
    // this.fileUrlList = [];
    // this._publicServices.getFilesDetail(params).subscribe(data => {
    //   data.forEach(element => {
    //     this.fileUrlList.push({
    //       id: element.id,
    //       name: element.fileName,
    //       url: "api/Attachment/Download?appId=" + AppId + "&id=" + element.id
    //     })
    //   });

    // })

  }
  // 编辑器change事件
  keyupHandler(value) {
    this.editContent = value;
  }
  deleteFile(id) {
    // let params = {
    //   id: id,
    //   AppId: AppId
    // }
    // this._publicServices.delete(params).subscribe(data => {
    //   if (data.result == 0) {
    //     this.fileUrlList.forEach((item, index) => {
    //       if (item.id == id) {
    //         this.fileUrlList.splice(index, 1);
    //       }
    //     })
    //     this.fileList.forEach((item, index) => {
    //       if (item.tid == id) {
    //         this.fileList.splice(index, 1);
    //         const fileList = lodash.cloneDeep(this.fileList);
    //         this.fileList = []
    //         this.fileList = fileList
    //       }
    //     })
    //     this.message.success(data.message);
    //   } else {
    //     this.message.error(data.message);
    //   }
    // })

  }
  beforeUpload = (file: UploadFile): boolean => {
    this.fileList.push({
      name: file.name,
      status: 'uploading',
      tid: file.uid,
      isUpLoad: true
    })
    const params = {
      sourceId: this.sourceId,
      // AppId: AppId,
      AppId: this.AppId,
      module: "table",
    }
    const formData: any = new FormData();
    formData.append('files', file);
    const index = this.fileList.length - 1
    this._publicServices.newUpload(formData, params).subscribe(data => {
      // if (data.result == 0) {
      //   this.fileList[index].url = this.fileUrl + 'api/Attachment/Download?appId=' + AppId + '&id=' + data.data[0].id
      //   this.fileList[index].status = 'done'
      //   this.fileList[index].tid = data.data[0].id
      //   const fileList = lodash.cloneDeep(this.fileList);
      //   this.fileList = []
      //   this.fileList = fileList
      // } else {
      //   this.fileList[index].status = 'error'
      //   this.fileList[index].isUpLoad = false
      //   const fileList = lodash.cloneDeep(this.fileList);
      //   this.fileList = []
      //   this.fileList = fileList
      // }
    }, error => {
      this.fileList[0].status = 'error'
      this.fileList[this.fileList.length - 1].isUpLoad = false
      const fileList = lodash.cloneDeep(this.fileList);
      this.fileList[this.fileList.length - 1] = fileList
    })
    return false;
  };
  removeFile = (file: UploadFile): boolean => {
    if (file.isUpLoad) {
      this.deleteFile(file.tid)
    } else {
      this.fileList.forEach((item, index) => {
        if (item.tid == file.tid) {
          this.fileList.splice(index, 1);
          const fileList = lodash.cloneDeep(this.fileList);
          this.fileList = []
          this.fileList = fileList
        }
      })
    }
    return true;
  }
}
