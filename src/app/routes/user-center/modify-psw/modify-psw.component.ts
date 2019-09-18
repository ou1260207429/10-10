import { Component, OnInit } from '@angular/core';


import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NzModalService } from 'ng-zorro-antd';
@Component({
  selector: 'app-user-center-modify-psw',
  templateUrl: './modify-psw.component.html',
  styleUrls: ['./modify-psw.component.less']
})
export class UserCenterModifyPswComponent implements OnInit {

  validateForm: FormGroup;



  oldPassword = "";
  newPassword = "";
  confirmPassword = "";
  modifying = false;
  constructor(
    private modalService: NzModalService,
    public http: HttpClient,
    private fb: FormBuilder) {

  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required, this.confirmationValidator]],

    });

  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.newPassword.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  modify() {
    this.modifying = true;
    // const url = URLConfig.getInstance().REGISTER_URL + "api/User/LoginUserChangePassword";


    const param = {
      OldPassword: this.oldPassword,
      NewPassword: this.newPassword,
      ConfirmPassword: this.confirmPassword
    }

    this.http.post(""
      // + "?oldPassword=" + this.oldPassword + "&newPassword=" + this.newPassword + "&confirmPassword=" + this.confirmPassword 
      , param).subscribe((res: any) => {

        // console.log(res);
        if (res) {
          if (res.result == 0) {
            this.modalService.success({
              nzTitle: '提示',
              nzContent: "修改成功",
            });
            this.validateForm.reset();

          } else {
            this.showErr(res.message);
          }
        }
        this.modifying = false;
      }, err => {
        this.showErr(err);
        this.modifying = false;
      });
  }

  showErr(msg) {
    this.modalService.info({
      nzTitle: '出错啦',
      nzContent: msg,
    });
  }
}
