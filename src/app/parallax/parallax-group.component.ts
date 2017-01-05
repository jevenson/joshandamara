import { Component, Input } from '@angular/core';

@Component({
    selector: 'parallax-group',
    template: `
        <div id="{{ groupId }}" class="parallax__group">
            <ng-content></ng-content>
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
    `]
})
export class ParallaxGroupComponent {
    @Input() groupIdNum: number;

    private get groupId(): string {
        return "group" + this.groupIdNum.toString();
    }
}