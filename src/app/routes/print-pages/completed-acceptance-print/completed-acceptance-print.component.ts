import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-print-pages-completed-acceptance-print',
  templateUrl: './completed-acceptance-print.component.html',
  styleUrls: ['../print.less']
})
export class PrintPagesCompletedAcceptancePrintComponent implements OnInit {
  constructor(private el: ElementRef) {
  }
  data: any;
  box;

  ngOnInit() {
    //this.data = JSON.parse(this.getToken());
    this.data = {
      jsconstructionUnit: '哈哈哈',
      legalRepresentative: '哈哈哈',
      legalRepresentativeNo: '111111111',
      contacts: '哈哈哈',
      contactsNumber: '66666666',
      projectName: '哈哈哈哈',

    };
    this.box = {};
  }
  ngOnDestroy(): void {
    localStorage.removeItem('jsonPrintForm');
  }
  print() {
    window.print();
  }
  /**
   * 获取token的值
   * */
  getToken() {
    return localStorage.getItem('jsonPrintForm');
  }

  ngAfterViewInit() {
    let rows = this.el.nativeElement.querySelectorAll(".row");
    for (var i = 0; i < rows.length; i++) {
      let ss = rows[i].offsetTop / 1470;
      let num = Math.floor(ss);

      if (num > 0) {
        if (rows[i].offsetTop - 1470 * num < 50) {
          rows[i - 2].className = "breakPage row";
        }
      }
    }
    window.print();
    history.go(-1);
  }
}
