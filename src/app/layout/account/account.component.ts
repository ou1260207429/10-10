import { Component } from '@angular/core';

@Component({
  selector: 'layout-account',
  templateUrl: './account.component.html',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.alain-account]': 'true',
  },
  styles: [`.account_container {
    width: 100 %;
    height: 100 %;
    background - repeat: no - repeat;
    background - position: center;
    background - size: 100 %;

}

.bg_img {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    // width: 100%;
    // right: 0;
    left: 0;
    margin: auto;
    overflow: hidden;
}`]
})
export class LayoutAccountComponent { }
