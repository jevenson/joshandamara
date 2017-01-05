import { Component, Input } from '@angular/core';

@Component({
    selector: 'parallax-group',
    template: `
        <div class="parallax__group" [ngClass]="setClasses()">
            <parallax-fore>
                <ng-content></ng-content>
            </parallax-fore>
            <parallax-back *ngIf="image" [image]="image"></parallax-back>
        </div>
    `,
    styles: [`
        .parallax__group {
            position: relative;
            height: 500px; /* fallback for older browsers */
            height: 100vh;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
        }
        
        /deep/ .parallax__layer {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        /deep/ .parallax_layer--bottom  {
            z-index: 1;
        }

        /deep/ .parallax_layer--top {
            z-index: 2;
        }

        /deep/ .parallax_layer--top .parallax__layer {
            background-color: white;
        }
    `]
})
export class ParallaxGroupComponent {
    @Input() private image: string;

    private setClasses(): any {
        return {
            'parallax_layer--top': !Boolean(this.image),
            'parallax_layer--bottom': Boolean(this.image)
        };
    }
}