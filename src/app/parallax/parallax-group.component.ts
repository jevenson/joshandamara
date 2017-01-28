import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-parallax-group',
    template: `
        <div class="parallax__group" [ngClass]="setClasses()" [id]="identifier">
            <app-parallax-fore>
                <ng-content></ng-content>
            </app-parallax-fore>
            <app-parallax-back *ngIf="backgroundClass" [backgroundClass]="backgroundClass"></app-parallax-back>

            <app-scroll-nav
                [aboveTarget]="aboveTarget"
                [belowTarget]="belowTarget"
                [alternate]="!backgroundClass"></app-scroll-nav>
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

    public aboveTarget: string = null;
    public belowTarget: string = null;

    @Input() public identifier: string = null;
    @Input() public backgroundClass: string;

    public setClasses(): any {
        return {
            'parallax_layer--top': !Boolean(this.backgroundClass),
            'parallax_layer--bottom': Boolean(this.backgroundClass)
        };
    }
}
