import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutMeIsOpen = true;
  experienceIsOpen = false;

  activeTab = 'tab1';

  activateTab(tab: string) {
    this.activeTab = tab;
  }

}
