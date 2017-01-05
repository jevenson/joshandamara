import { Component, Input } from '@angular/core';

@Component({
    selector: 'parallax-back',
    template: `
        <div class="parallax__layer parallax__layer--back" [style.background-image]="'url(' + image + ')'"></div>
    `,
    styles: [`
        .parallax__layer--back {
            -webkit-transform: translateZ(-300px) scale(2);
            transform: translateZ(-300px) scale(2.01, 2);
            -moz-transform: translateZ(-300px) scale(2.02, 2);
            -ms-transform: none;
            z-index: 3;
            background-position: center;
            background-size: cover;
        }
    `]
})
export class ParallaxBackgroundComponent {
    @Input() image: string;

    private get imageStyle(): string {
        return 'url(' + this.image + ');';
    }
}