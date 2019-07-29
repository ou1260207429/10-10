
import {
  Component,
  Injector,
  OnInit,
  AfterViewInit

} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ReuseTabService } from '@delon/abc';

import * as $ from 'jquery';
import { URLConfig } from '@shared/config/host';
// import { ITokenService } from '@delon/auth';
import { AccountBase } from '../public/account-base.component';

import { AppSessionService } from '@shared/config/app-session';

let checkCode: any;
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class AccountLoginComponent extends AccountBase implements OnInit, AfterViewInit {
  constructor(
    injector: Injector,
    private fb: FormBuilder,

    private _router: Router,

    // private tokenService: ITokenService,
    private appSession: AppSessionService,
    private reuseTabService: ReuseTabService,

  ) {
    super(injector);


    this.isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
  }





  submitting = false;
  // validateForm: FormGroup;
  count = 0;
  usePsw = true;



  isNeedDragSlider = false;

  isChrome = true;

  isSimplePsw = false;

  loginErrMsg = "";


  loginModel = {
    // client_id: 'AEDA41B4-C038-4053-9105-3C73279E21C5',
    // client_secret: 'secret',
    // grant_type: 'password',
    // username: '',
    // password: ''
    userNameOrEmailAddress: "",
    password: "",
    clientId: "AEDA41B4-C038-4053-9105-3C73279E21C5"
  };




  switchUswPsw() {
    this.usePsw = !this.usePsw;
  }


  ngOnInit(): void {


    if (this.appSession.getAccessToken()) {

      this._router.navigate(['/app/home/welcome']);
    }
    this.reuseTabService.clear();
  }


  initSliter() {
    checkCode = "" + Math.ceil(Math.random() * 10000);

    $(".inner").mousedown(function (e) {

      const el = $(".inner");

      const os = el.offset();
      let dx;
      const span = $(".outer>span");
      const filter = $(".filter-box");

      $("#slider_content").attr("value", "no");

      const _differ = $(".outer").width() - el.width();
      // tslint:disable-next-line: only-arrow-functions
      $(document).mousemove(function (e) {
        dx = e.pageX - os.left;
        if (dx < 0) {
          dx = 0;
        } else if (dx > _differ) {
          dx = _differ;
        }
        filter.css('width', dx);
        el.css("left", dx);
      });
      $(document).mouseup(function (e) {
        $(document).off('mousemove');
        $(document).off('mouseup');
        dx = e.pageX - os.left;
        if (dx < _differ) {
          dx = 0;
          span.html("请拖动滑块至最右边");
        } else if (dx >= _differ) {
          dx = _differ;
          $(".outer").addClass("act");
          span.html("验证通过！");
          el.html('&radic;');


          $("#slider_content").attr("value", checkCode);
          // $(this).trigger('change');


        }
        filter.css('width', dx);
        el.css("left", dx);

      })
    });
  }

  resetSliter() {
    checkCode = "" + Math.ceil(Math.random() * 10000);
    const el = $(".inner");
    el.css("left", 0);
    el.html('&gt;&gt;');

    $(".outer").removeClass("act");

    $("#slider_content").attr("value", "no");
    const span = $(".outer>span");
    span.html("请拖动滑块至最右边");
    const filter = $(".filter-box");
    filter.css('width', 0);
  }

  ngAfterViewInit() {
    this.initSliter();
  }

  getCaptcha() {
    this.getServerCaptcha(this.loginModel.userNameOrEmailAddress, 0);
  }



  login(): void {
    const str = $("#slider_content").attr("value");
    if (str === checkCode) {

      this.submitting = true;



      const url = URLConfig.getInstance().REGISTER_URL + "api/User/Login";// ?MerchantId=C8793952-540E-414C-98FF-9C65D6";
      // const url = URLConfig.getInstance().SERVER_URL + "/api/services/app/Login/Authenticate";



      this.http.post(url, this.loginModel).subscribe((res: any) => {


        if (res) {
          if (res.result == 0) {


            this.appSession.setAccessToken(res.data.access_token);

            this.appSession.initUserInfo(
              () => {
                /** 强制刷新导航栏url 跳转到首页 */
                this.submitting = false;
                this._router.navigate(['/app/home/welcome']);

              }, (err) => {

                this.loginErrMsg = err;
                this.submitting = false;
              });


          } else {
            this.loginErrMsg = res.data.message;
          }
        }
        this.submitting = false;
        this.saving = false;
      }, err => {
        this.loginErrMsg = err;
        this.saving = false;
        this.submitting = false;
      });

    } else {

      this.loginErrMsg = '请完成拖动验证！';

    }

  }


}
