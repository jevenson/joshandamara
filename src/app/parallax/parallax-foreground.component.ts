import { Component, Input } from '@angular/core';

@Component({
    selector: 'parallax-fore',
    template: `
        <div class="parallax__layer parallax__layer--fore">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .parallax__layer--fore {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -ms-transform: none;
            z-index: 4;
        }
    `]
})
export class ParallaxForegroundComponent { }