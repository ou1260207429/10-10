import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class HomeWelcomeComponent implements OnInit {
  loginName = "";
  constructor() {
  }

  ngOnInit() { }

}
