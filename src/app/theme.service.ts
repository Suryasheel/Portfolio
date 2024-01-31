import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public isDarkThemeSubject = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkThemeSubject.asObservable();
  
  isDarkTheme = false;
  imageUrl = './assets/Images/Icons/moon.svg';
  toggleTheme() {

    const isDarkTheme = this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(!isDarkTheme);

    this.isDarkTheme = !this.isDarkTheme;
    this.imageUrl = this.isDarkTheme ? './assets/Images/Icons/sun.svg' : './assets/Images/Icons/moon.svg';

    setTimeout(() => {
      if (!this.isDarkTheme) {
        document.body.className = "bg-dark";
      } else {
        document.body.className = "bg-light";
      }
    }, 100); 

    

  }

}
