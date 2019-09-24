import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';

@Component({
  selector: 'app-print-pages-fiew-design-declare-print',
  templateUrl: './fiew-design-declare-print.component.html',
  styleUrls: ['../print.less']
})
export class PrintPagesFiewDesignDeclarePrintComponent implements OnInit {
  constructor(private el: ElementRef) {
  }
  data: any;

  ngOnInit() {
    this.data = JSON.parse(this.getToken());
  }
  ngOnDestroy(): void {
    localStorage.removeItem('jsonPrintForm');
  }
  // /**
  //  * 获取token的值
  //  * */
  getToken() {
    return localStorage.getItem('jsonPrintForm');
  }
  print() {
    window.print()
  }
  ngAfterViewInit() {

    let rows = this.el.nativeElement.querySelectorAll(".row");
    //  console.log(rows);
    for (var i = 0; i < rows.length; i++) {
      let ss = rows[i].offsetTop / 1470;
      let num = Math.floor(ss);

      if (num > 0) {
        if (rows[i].offsetTop - 1470 * num < 100) {
          rows[i - 2].className = "breakPage row";
        }
      }
    }
    window.print();
    history.go(-1);
  }
}

