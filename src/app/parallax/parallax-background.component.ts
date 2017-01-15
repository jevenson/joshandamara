import { Component, Input } from '@angular/core';

@Component({
    selector: 'parallax-back',
    template: `
        <div class="parallax__layer parallax__layer--back" [ngClass]="backgroundClass">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .parallax__layer--back {
            -webkit-transform: translateZ(-300px) scale(2);
            transform: translateZ(-300px) scale(2.01, 2);
            -moz-transform: translateZ(-300px) scale(2.02, 2);
            -ms-transform: none;
            background-position: center;
            background-size: cover;
        }
    `]
})
export class ParallaxBackgroundComponent {
    @Input() private backgroundClass: string;
}