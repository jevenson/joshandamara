import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {

    constructor() {
        if (navigator.userAgent.match(/Edge/i)) {
            console.log("edge sucks m8");
        }
    }

    onNextClick(next: string) {
        $('.parallax').animate(
            {
                scrollTop: $('#' + next).offset().top
            }, 2000);
    }
}