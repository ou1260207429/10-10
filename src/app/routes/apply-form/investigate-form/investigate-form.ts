import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PageDataHelper } from 'src/app/services/page-data-helper';
import { FlowTemplateService } from 'src/app/services/flow-template.service';
import { MessageBox } from 'src/app/services/message-box';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplyFormModel } from '../services/apply-form-model';
import { ModalHelper } from '@delon/theme';

@Component({
    selector: 'investigate-form',
    templateUrl: './investigate-form.html',
    styleUrls: ["../apply-form.less"],
    providers: [FlowTemplateService]
})
export class InvestigateFormComponent implements OnInit {

    formModel: ApplyFormModel; // 表单数据
    @ViewChild('validateForm', { static: false }) validateForm: FormGroup;// 表单验证
    nzFormat = 'YYYY/MM/DD';
    errorStyle = { 'background': 'red' };
    errorClass = 'error_tr';

    constructor(private formBuilder: FormBuilder,
        private flowTemplateService: FlowTemplateService,
        private messageBox: MessageBox,
        private modal: ModalHelper,
        private fb: FormBuilder) {
        this.formModel = new ApplyFormModel();
    }

    ngOnInit() {
        // setTimeout(() => {
        //     this.validForm();
        // });

        if (this.formModel.drawingNumberArray.length == 0) {
            this.addDrawingNumber();
        }
    }

    protected validForm(): boolean {
        let result = true;
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
            if (this.validateForm.controls[i].dirty && this.validateForm.controls[i].errors) {
                result = false;
            }
        }
        return result;
    }

    addDrawingNumber() {
        this.formModel.drawingNumberArray.push('');
    }

    deleteDrawingNumber(index) {
        if (this.formModel.drawingNumberArray.length < 2) {
            this.messageBox.warning('必须保留一个审图编号');
        } else {
            this.formModel.drawingNumberArray.splice(index, 1);
        }
    }

    validDrawingNumber(){
        if(this.formModel.drawingNumberArray.length>0){

        }
    }

}
