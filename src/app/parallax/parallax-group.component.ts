import { Component, Input } from '@angular/core';

@Component({
    selector: 'parallax-group',
    template: `
        <div class="parallax__group" [ngClass]="setClasses()">
            <parallax-fore>
                <ng-content></ng-content>
            </parallax-fore>
            <parallax-back *ngIf="backgroundClass" [backgroundClass]="backgroundClass"></parallax-back>
        </div>
        
        <span class="scroll-btn scroll-btn-up glyphicon glyphicon-chevron-up"></span>
        <span class="scroll-btn scroll-btn-down glyphicon glyphicon-chevron-down"></span>
    `,
    styles: [`
        .parallax__group {
            position: relative;
            height: 500px; /* fallback for older browsers */
            height: 110vh;
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

        .scroll-btn {
            position: absolute;
            right: 2vw;
            color: white;
            font-size: 2vh;
            z-index: 2;
            border: 4px solid white;
            top: auto;
            width: 7vh;
            max-width: 100px;
            min-width: 45px;
            height: 7vh;
            max-height: 100px;
            min-height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .scroll-btn-up {
            top: 2vh;
        }

        .scroll-btn-down {
            bottom: 2vh;
        }
    `]
})
export class ParallaxGroupComponent {
    @Input() private backgroundClass: string;

    private setClasses(): any {
        return {
            'parallax_layer--top': !Boolean(this.backgroundClass),
            'parallax_layer--bottom': Boolean(this.backgroundClass)
        };
    }
}