import { Component } from '@angular/core';

@Component({
    selector: 'app-event',
    template: `
        <app-content-wrapper header="the event" icon="fa-calendar-o">
            <div class="container">
                <div class="img-container">
                    <img src="assets/sentry-world.jpg" />
                </div>
                <div class="text-container">
                    <h2 class="content-font">Sentry World</h2>
                    <hr/>
                    <h3 class="content-font">Stevens Point, WI</h3>
                    <p>601 North Michigan Avenue</p>
                    <p>Stevens Point, WI 54481</p>
                </div>
            </div>
        </app-content-wrapper>
    `,
    styles: [`
        :host >>> .content-container {
            display: flex;
        }

        .container {
            display: flex;
            flex-direction: row;
            align-self: center;
        }

        @media(orientation: landscape) { .container { flex-direction: row; } }
        @media(orientation: portrait) { .container { flex-direction: column; } }

        .text-container {
            flex: 1;
            padding: 0 2vmax;
        }

        @media(orientation: portrait) { .text-container { padding: 2vmax 0 0; text-align: center; } }

        h2, h3 { margin: 0; }

        hr {
            display: block;
            height: 5px;
            border: 0;
            border-top: 5px solid pink;
            margin: 10px 0;
            padding: 0;
        }

        .img-container {
            flex: 2;
        }

        img {
            border: 5px solid pink;
            box-sizing: border-box;
            width: 100%;
        }
    `]
})
export class EventComponent {}
