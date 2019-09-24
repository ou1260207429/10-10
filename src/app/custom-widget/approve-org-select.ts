import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef, Input, Output, EventEmitter, Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
    selector: 'approve-org-select',
    template: `  
    <nz-select nzShowSearch [nzAllowClear]='allowClear'
    [nzServerSearch]="false"
    [(ngModel)]="value" [nzPlaceHolder]="placeHolder" >
        <nz-option *ngFor="let option of list" [nzLabel]="option.orgName" [nzValue]="option.orgId">
        </nz-option>
        <nz-option *ngIf="isLoading" nzDisabled nzCustomContent>
        <i nz-icon type="loading" class="loading-icon"></i> Loading Data...
      </nz-option>
    </nz-select>`,
    styles: [],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ApproveOrgSelect),
        multi: true
    }, HttpService]
})

export class ApproveOrgSelect implements ControlValueAccessor {
    @Input() placeHolder = '选择审批单位';
    @Input() allowClear = true; // 运行清空
    @Input() defaultFirstOption = false; // 是否默认第一个选项
    valueEx: number;
    @Output() selectChange = new EventEmitter<any>();
    @Output() initComplete = new EventEmitter<any>();
    list: any;
    isLoading = false;
    constructor(private httpService: HttpService) {
        this.search();
    }

    search(): void {
        this.isLoading = true;
        this.httpService.post('/api/v1/Fire/Org/GetOrg', {}, null, data => {
            debugger
            this.list = data;
            if (this.defaultFirstOption == true && this.list != null && this.list.length > 0) {
                this.value = this.list[0].orgId;
            }
        }, null, () => {
            this.isLoading = false;
            this.initComplete.emit();
        });
    }


    private onTouchedCallback: () => void = function () { };
    private onChangeCallback: (_: any) => void = function () { };

    get value(): any {
        return this.valueEx;
    }

    set value(v: any) {
        if (v !== this.valueEx) {
            this.valueEx = v;
            this.onChangeCallback(v);
            this.change(v);
        }
    }

    writeValue(value: any) {
        if (value !== this.valueEx) {
            if (this.allowClear != true && value == null && this.list != null && this.list.length > 0) {
                value = this.list[0].orgId;
                this.onChangeCallback(value);
                this.change(value);
            }
            this.valueEx = value;
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    // provinceChange(value: any): void {
    //     this.change(value);
    // }

    change(v) {
        if (this.selectChange != null) {
            this.list.forEach(element => {
                if (element.orgId == v) {
                    this.selectChange.emit(element);
                    return;
                }
            });
        }
    }
}
