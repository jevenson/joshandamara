import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div class="app-container" [class.iOS]="iOS">
        <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent {
    constructor() {
        if (navigator.userAgent.match(/Edge/i)) {
            console.log('edge sucks m8');
        }
    }

    public get iOS(): boolean {
        return true;// /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
}
