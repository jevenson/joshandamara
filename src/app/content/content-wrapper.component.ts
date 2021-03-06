import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-content-wrapper',
    template: `
        <div class="content-wrapper_main">
            <h1 *ngIf="header">
                <i [class]="iconClass"></i>
                {{ header }}
            </h1>
            <div class="content-container">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .content-wrapper_main {
            height: 90vh;
            width: 85vw;
            margin-bottom: 10vh;
        }

        h1 {
            height: 10%;
        }

        i {
            font-size: 66%;
            transform: rotate(-15deg);
            margin-right: 3vw;
            color: pink;
        }

        .content-container {
            height: 80%;
        }
    `]
})
export class ContentWrapperComponent  {
    @Input() public header: string = null;
    @Input() private icon: string = null;

    public get iconClass(): string {
        return 'fa ' + this.icon;
    }
}
