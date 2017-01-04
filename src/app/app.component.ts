import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'app works!';

    isMobile: boolean = false;

    constructor() {
      if (navigator.userAgent.match(/Edge/i)) {
        console.log("edge sucks m8");
      }
    }
}