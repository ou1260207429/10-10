import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-content-manage-handling-guid-detail',
  templateUrl: './handling-guid-detail.component.html',
})
export class ContentManageHandlingGuidDetailComponent implements OnInit {
  data;
  RegulationType;
  editorParams;

  constructor(private http: _HttpClient, private modal: ModalHelper) {

    this.data = {};
  }

  ngOnInit() { }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
  deleteFile(data) {

  }

}
