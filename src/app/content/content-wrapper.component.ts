import { Component, Input } from '@angular/core';

@Component({
    selector: 'content-wrapper',
    template: `
        <div class="content-wrapper_main">
            <h1>{{ title }}</h1>
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .content-wrapper_main {
            height: 90vh;
            width: 85vw;
            margin-bottom: 10vh;
        }
    `]
})
export class ContentWrapperComponent  {
    @Input() private title: string = null;
}