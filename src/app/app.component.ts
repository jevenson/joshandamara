import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    constructor() {
        if (navigator.userAgent.match(/Edge/i)) {
            console.log('edge sucks m8');
        }
    }
}
