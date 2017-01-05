import { Component, Input } from '@angular/core';

@Component({
    selector: 'parallax-list',
    template: `
        <div class="parallax">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .parallax {
            height: 500px; /* fallback for older browsers */
            height: 100vh;
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-perspective: 300px;
            perspective: 300px;
        }
    `]
})
export class ParallaxListComponent { }