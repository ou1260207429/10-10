import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  searchToggleStatus: boolean;

  constructor(public settings: SettingsService, private configService: ConfigService) { }

  toggleCollapsedSidebar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }

  openHall() {
    window.open(this.configService.config.serviceSetting.officeHallUrl);
  }

  openUaa() {
    window.open(this.configService.config.serviceSetting.uaaUrl);
  }

}
