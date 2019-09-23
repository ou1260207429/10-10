import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-details-completed-acceptance-assembly',
  templateUrl: './completed-acceptance-assembly.component.html',
  styleUrls: ['../details.less']
})
export class DetailsCompletedAcceptanceAssemblyComponent implements OnInit {

  //市县区
  position;// = OptionsEnum
  data;
  //结构类型
  typeSelect;
  box;
  person;
  type;
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
  engineeringList;



  //耐火结构
  refractoryEnum;

  @ViewChild('st', { static: false }) st: STComponent;

  constructor(private http: _HttpClient, private modal: ModalHelper) {
    this.position = {};
    this.data = {};
    this.box = {};
    this.person = {};
    this.type = 1;

  }

  ngOnInit() {
    this.item
  }


  printFormData() {

  }
}
