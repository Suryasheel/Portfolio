import { Component } from '@angular/core';

@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.component.html',
  styleUrls: ['./my-experience.component.scss']
})
export class MyExperienceComponent {
  skills = [
    {skill: 'SCSS'},
    {skill: 'Material'},
    {skill: 'Angular'},
    {skill: 'TypeScript'},
    {skill: 'JavaScript'},
    {skill: 'GSAP'},
    {skill: 'AzureDev'},
    {skill: 'Wordpress'},
    {skill: 'jQuery'},
    {skill: 'Node.Js'},
  ]
}
