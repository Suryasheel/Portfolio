import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor (public themeService: ThemeService){
    
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }

  // isDarkTheme = false;
  // imageUrl = './assets/Images/Icons/moon.svg';

  // toggleTheme() {
  //   this.isDarkTheme = !this.isDarkTheme;
  //   this.imageUrl = this.isDarkTheme ? './assets/Images/Icons/sun.svg' : './assets/Images/Icons/moon.svg';

  //   if (this.isDarkTheme) {
      
  //     document.body.className = "bg-dark";
  //   } else {
  //     document.body.className = "bg-light";
  //   }

  // }

}
