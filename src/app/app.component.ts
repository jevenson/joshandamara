import { Component } from '@angular/core';

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
    public get iOS(): boolean {
        // Have to test MSStream because iPhone may appear in the IE User Agent
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
}
