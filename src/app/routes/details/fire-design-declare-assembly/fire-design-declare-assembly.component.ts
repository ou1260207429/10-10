import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-fire-design-declare-assembly',
  templateUrl: './fire-design-declare-assembly.component.html',
  styleUrls: ['../details.less']
})
export class DetailsFireDesignDeclareAssemblyComponent implements OnInit {
  //市县区
  position;// = OptionsEnum
  data;
  //结构类型
  typeSelect;
  box;
  person;
  strItem;
  errorData;
  item = {
    name: '哈哈哈',
    type: '混合结构',
    grade: '三级',
    height: '5',
    upGround: '3',
    underGround: '2',
    builtUpArea2: '1',
    builtUnderArea: '22',
    fireHazard: '33',
    reserves: '88',

  }
  planStartTime = "2019-11-11";
  planEndTime = "2019-11-12";
  specialEngineering;
  constructor(private http: _HttpClient,
    private modal: ModalHelper,
    private router: Router,
  ) {

    this.position = {};
    this.data = {};
    this.box = {};
    this.person = {};
    this.strItem = {};
    this.errorData = {};
  }

  ngOnInit() { }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
  printFormData() {

    this.router.navigate([`/print-pages/fiew-design-declare-print`]);
  }

}
