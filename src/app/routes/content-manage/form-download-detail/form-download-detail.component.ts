import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { AttachmentServiceProxy, AttachmentDto } from '@shared/service-proxies/service-proxies';
import { NzMessageService, UploadFile, UploadFilter } from 'ng-zorro-antd';
// import { EventEmiter } from 'infrastructure/eventEmiter';
// import { PublicServices } from 'services/public.services';
// import { createguid } from 'infrastructure/regular-expression';
// import { AppId } from 'infrastructure/expression';
import lodash from 'lodash'
import { PublicServices } from 'src/app/services/public.services';
@Component({
  selector: 'app-content-manage-form-download-detail',
  templateUrl: './form-download-detail.component.html',
  styleUrls: ['./form-download-detail.less']
})
export class ContentManageFormDownloadDetailComponent implements OnInit {
  // 表单对象
  data: any;
  fileList: any = [];
  // acceptType: ".doc,.docx,.xls,.xlsx,.pdf"
  acceptType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  // uploadUrl = "http://demo.rjtx.net:5001/api/Upload/Upload"
  filesUrl: any = {}
  sourceId: string
  AppId;
  constructor(
    private _publicServices: PublicServices,
    // private _eventEmiter: EventEmiter,
    private message: NzMessageService,
    // private _attachmentServiceProxy: AttachmentServiceProxy,
    private _activatedRoute: ActivatedRoute
  ) {
  }
  ngOnInit() {
    // this.data = new AttachmentDto();
    // this.sourceId = createguid()
  }
  goBack() {
    history.go(-1);
  }

  /**
   * 提交
   */
  save() {
    // this.data.guid = this.sourceId;
    // this._attachmentServiceProxy.addAttachmentAsync(this.data).subscribe(data => {
    //   this.message.success("新增成功");
    //   this._eventEmiter.emit('init', []);
    //   this.goBack();
    // })
  }
  // 阻止自动上传
  beforeUpload = (file: UploadFile): boolean => {
    this.fileList = []
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
    this._publicServices.newUpload(formData, params).subscribe(data => {
      if (data.result == 0) {
        this.fileList[0].url = null + 'api/Attachment/Download?appId=' + this.AppId + '&id=' + data.data[0].id
        this.fileList[0].status = 'done'
        this.fileList[0].tid = data.data[0].id
        const fileList = lodash.cloneDeep(this.fileList);
        this.fileList = fileList
      } else {
        this.fileList[0].status = 'error'
        this.fileList[0].isUpLoad = false
        const fileList = lodash.cloneDeep(this.fileList);
        this.fileList = []
        this.fileList = fileList
      }
    }, error => {
      this.fileList[0].status = 'error'
      this.fileList[0].isUpLoad = false
      const fileList = lodash.cloneDeep(this.fileList);
      this.fileList = []
      this.fileList = fileList
    })
    return false;
  };
  // 删除上传文件
  removeFile = (file: UploadFile): boolean => {
    if (file.isUpLoad) {
      const params = {
        // AppId: AppId,
        AppId: this.AppId,
        id: file.tid,
      }
      this._publicServices.delete(params).subscribe(data => {
        if (data.result == 0) {
          this.message.success(data.message)
        } else {
          this.message.error(data.message)
        }
      })
    }
    this.fileList = [];
    return true;
  }
}