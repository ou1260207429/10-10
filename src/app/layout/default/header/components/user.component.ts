import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserInfoService } from 'src/app/services/user-info-sevice';
// import { HeaderService } from '../header.service';

@Component({
  selector: 'header-user',
  template: `
    <div
      class="alain-default__nav-item d-flex align-items-center px-sm"
      nz-dropdown
      nzPlacement="bottomRight"
      [nzDropdownMenu]="userMenu"
    >
      <nz-avatar [nzSrc]="settings.user.avatar" nzIcon="user" nzSize="default" class="mr-sm"></nz-avatar>
      <p style="text-overflow: ellipsis;max-width:130px;margin-bottom:0;-webkit-line-clamp: 2;display: -webkit-box;overflow: hidden;-webkit-box-orient: vertical;">
      {{ settings.user.name }}
      </p>
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <div nz-menu class="width-sm">
        <div nz-menu-item routerLink="/pro/account/center">
          <i nz-icon nzType="user" class="mr-sm"></i>
         个人中心
        </div>
        <div nz-menu-item (click)="changePsw()">
          <i nz-icon nzType="setting" class="mr-sm"></i>
          修改密码
        </div>
        <div nz-menu-item routerLink="/exception/trigger">
          <i nz-icon nzType="close-circle" class="mr-sm"></i>
          触发错误
        </div>
        <li nz-menu-divider></li>
        <div nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          退出登录
        </div>
      </div>
    </nz-dropdown-menu>
  `,
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserComponent {

  constructor(
    public settings: SettingsService,
    private router: Router,
    private userInfoService: UserInfoService,
    // provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true ,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    //
  ) {
    this.userInfoService.init();
  }


  logout() {
    const exitParams = {
      token: this.tokenService.get().token,
      userID: this.tokenService.get().id,
    }

    // this.loginService.exit(exitParams, data => {

    // }, () => {
    //   this.tokenService.clear();
    //   this.router.navigateByUrl(this.tokenService.login_url!);
    // });

  }
  changePsw() {
    this.router.navigate(['/modify-psw']);
  }
}
