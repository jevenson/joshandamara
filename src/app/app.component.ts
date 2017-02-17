import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;

@Component({
    selector: 'app-root',
    template: `
    <div class="app-container" [class.iOS]="iOS">
        <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent {
    constructor(private router: Router) {
        if (navigator.userAgent.match(/Edge/i)) {
            router.navigate(['rip']);
        }
    }

    public get iOS(): boolean {
        // Have to test MSStream because iPhone may appear in the IE User Agent
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
}
