import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {

    private weddingDate: Date = new Date(2017, 8, 2);

    private get countdown(): number {
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

        return Math.round(Math.abs((this.weddingDate.getTime() - new Date().getTime())/(oneDay)));
    }

    constructor() {
        if (navigator.userAgent.match(/Edge/i)) {
            console.log('edge sucks m8');
        }
    }
}
