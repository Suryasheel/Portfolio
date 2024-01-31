import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  loading = true;

  ngOnInit() {
    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      this.loading = false;
    }, 1000); // Adjust the timeout as needed
  }
}
