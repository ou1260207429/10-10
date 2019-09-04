
import { Component, Input, Output, EventEmitter, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { URLConfig } from '@shared/config/host';




@Component({
  selector: 'nz-rj-selector-org',
  encapsulation: ViewEncapsulation.None,
  template: `


   <div class="org-input">
    <input  nz-input 
      [name]="name"
      [placeholder]="placeHolder"
     
      [(ngModel)]="ngModel"
      (input)="onInput($event.target?.value)"
      [nzAutocomplete]="auto"
      (ngModelChange)="onChange($event)"
      [required]="required"
      [readonly]="readonly"
    />
    <nz-autocomplete nzBackfill #auto>
      <nz-auto-option *ngFor="let option of orgList" [nzValue]="option.name">
        {{ option.name }}
      </nz-auto-option>
    </nz-autocomplete>
    
    </div>
   
    `
  ,
  styles: [
    `
      .org-input {
      
      }
    `]
})
export class SelectorOrgComponent {
  constructor(
    private http: _HttpClient) {

  }

  // AfterViewInit(){
  //   this.inRequired = this.inputRequired;
  // }

  isLoading = false;






  orgList: EnterpriseDto[];

  @Input() ngModel: any;

  @Output() ngModelChange = new EventEmitter();

  @Input()
  name: string;

  @Input()
  required: boolean;

  @Input()
  readonly = false

  @Input()
  placeHolder = "请输入单位名称";



  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSelectorEvent = new EventEmitter<EnterpriseDto>();

  onChange(value) {
    this.ngModelChange.emit(value);
    if (this.orgList && this.orgList.length > 0) {
      for (const i of this.orgList) {
        if (i.name === value) {
          this.onSelectorEvent.emit(i);
          return;
        }

      }
    }

  }


  onInput(value: string): void {
    this.isLoading = true;

    this.http.get(URLConfig.getInstance().SERVER_URL + 'api/services/app/Home/GetOrganizationsByName', { search: value }).subscribe((res: EnterpriseDto[]) => {
      this.isLoading = false;

      this.orgList = res;
      // console.log(res);

    }, err => {
      // console.log(err);
      this.isLoading = false;
      this.orgList = [];
    });
  }
}

class EnterpriseDto {
  name: string | undefined;
  leader: string | undefined;
  leaderPhone: string | undefined;
  contact: string | undefined;
  contactPhone: string | undefined;
  qualificationLevel: string | undefined;
}