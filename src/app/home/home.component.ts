import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor (public themeService: ThemeService){

  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }

  cardDetails = [
    { cardTitle: 'Efficient', cardImgUrl: './assets/Images/Icons/efficient.svg', cardText: 'I prioritize efficiency in my work, ensuring that tasks are completed in a timely manner without compromising on quality. With a strong attention to detail.' },
    { cardTitle: 'Adaptable', cardImgUrl: './assets/Images/Icons/adaptable.svg', cardText: 'I am highly adaptable and able to thrive in dynamic work environments. I can quickly adjust to new roles, responsibilities, and team structures.' },
    { cardTitle: 'Hardworking', cardImgUrl: './assets/Images/Icons/hardworking.svg', cardText: 'I am resilient and perseverant, willing to put in the extra hours and effort when needed to meet deadlines and overcome challenges in projects.' }
  ]
}
