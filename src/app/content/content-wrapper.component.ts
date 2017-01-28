import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-content-wrapper',
    template: `
        <div class="content-wrapper_main">
            <h1 *ngIf="title">
                <i [class]="iconClass"></i>
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
            font-size: 66%;
            transform: rotate(-15deg);
            margin-right: 3vw;
            color: pink;
        }
    `]
})
export class ContentWrapperComponent  {
    @Input() public title: string = null;
    @Input() private icon: string = null;

    public get iconClass(): string {
        return 'fa ' + this.icon;
    }
}
