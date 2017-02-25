import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hero-text',
    template: `
        <app-content-wrapper>
            <h1 [class.top]="top" [class.bottom]="!top"><ng-content></ng-content></h1>
        </app-content-wrapper>
    `,
    styles: [`
        h1 {
            text-align: center;
            position: absolute;
            top: 60vh;
            left: 0vw;
            color: white;
            font-size: 5vh;
            text-shadow: 3px 3px black;
            width: 96vw;
            padding: 2vw;
        }

        .top { top: 10vh; }
        .bottom { top: 60vh; }
    `]
})
export class HeroTextComponent {
    @Input() public top: boolean = false;
}
