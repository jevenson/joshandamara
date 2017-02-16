import { Component } from '@angular/core';

declare var window: any;

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    constructor() {
        if (navigator.userAgent.match(/Edge/i)) {
            console.log('edge sucks m8');
        }

        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        if (iOS) {
            window['iOS'] = true;
        }
    }
}
