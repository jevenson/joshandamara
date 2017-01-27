import { Component, Input } from '@angular/core';

@Component({
    selector: 'content-wrapper',
    template: `
        <div class="content-wrapper_main">
            <h1 *ngIf="title">
                <i class="fa fa-heart"></i>
                {{ title }}
            </h1>
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .content-wrapper_main {
            height: 90vh;
            width: 85vw;
            margin-bottom: 10vh;
        }

        i {
            font-size: 4vh;
            margin-right: 4vw;
            transform: rotate(-15deg);
            color: pink;
        }
    `]
})
export class ContentWrapperComponent  {
    @Input() private title: string = null;
}