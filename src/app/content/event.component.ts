import { Component } from '@angular/core';

@Component({
    selector: 'app-event',
    template: `
        <app-content-wrapper header="the event" icon="fa-calendar-o">
            <div class="container">
                <div class="img-container"></div>
                <div class="text-container">
                    <h2 class="content-font">SentryWorld</h2>
                    <hr/>
                    <h3 class="content-font">Stevens Point, WI</h3>
                    <p>601 North Michigan Avenue <br/> Stevens Point, WI 54481</p>
                    <div class="text-description-container">
                        <p>We would be honored for you to join us for the wedding ceremony on the beautiful grounds at SentryWorld.
                        The reception will also be held at SentyWorld in the Grand Hall. </p>

                        <p>More information about the schedule of events will be available in May.</p>
                    </div>
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
            flex-grow: 1;
            width: 100%;
            height: 100%;
        }

        @media(orientation: landscape) { .container { flex-direction: row; } }
        @media(orientation: portrait) { .container { flex-direction: column; } }

        .text-container {
            /* IE Fallback */
            padding: 0 5%;
            padding: 0 2vmax;
            display: flex;
            flex: 1;
            flex-direction: column;
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

        .text-description-container {
            margin-top: 2vmax;
            text-align: justify;
        }

        .img-container {
            flex: 2;
            background-image: url(assets/sentry-world.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border: 5px solid pink;
            box-sizing: border-box;
            width: 100%;
        }

        @media(orientation: portrait) { .img-container { flex: 1; } }
    `]
})
export class EventComponent {}
