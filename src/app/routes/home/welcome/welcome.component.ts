import { Component, OnInit } from '@angular/core';
import { AppSessionService } from '@shared/config/app-session';


@Component({
  selector: 'app-home-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class HomeWelcomeComponent implements OnInit {
  loginName = "";
  constructor(private appSessionService: AppSessionService) {
    this.loginName = this.appSessionService.getShownLoginName();
  }

  ngOnInit() { }


  _onReuseDestroy() {

  }
}
