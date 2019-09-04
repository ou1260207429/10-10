import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { AppSessionService } from '@shared/config/app-session';

@Component({
  selector: 'header-user',
  template: `
  <div
  class="alain-default__nav-item d-flex align-items-center px-sm"
  nzPlacement="bottomRight"
  (click)="logout()"
>

  <i nz-icon nzType="logout" class="mr-sm"></i>
  <span>退出</span>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserComponent {
  constructor(
    private appSessionService: AppSessionService,
    private router: Router,
  ) { }

  logout() {
    this.appSessionService.clearAccessToken();
    this.router.navigateByUrl("/account/login");
  }
}
