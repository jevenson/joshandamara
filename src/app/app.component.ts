import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit{
    title = 'app works!';

    constructor() {
    }

    public ngAfterViewInit(): void {
    }
}
