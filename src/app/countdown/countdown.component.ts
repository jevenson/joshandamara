import { Component } from '@angular/core';

@Component({
    selector: 'app-countdown',
    template: `
        <app-content-wrapper>
            <h1 class="title">Only {{ countdown }} days until the big day!</h1>
        </app-content-wrapper>
    `,
    styles: [`
        .title {
            text-align: center;
            position: absolute;
            top: 60vh;
            left: 0vw;
            color: white;
            font-size: 5vh;
            text-shadow: 3px 3px black;
            width: 96vw;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 2vw;
        }
    `]
})
export class CountdownComponent  {
    private weddingDate: Date = new Date(2017, 8, 2);

    public get countdown(): number {
        let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

        return Math.round(Math.abs((this.weddingDate.getTime() - new Date().getTime()) / (oneDay)));
    }
}
