import { Component } from '@angular/core';

@Component({
    selector: 'app-lodging',
    template: `
        <app-content-wrapper header="where to stay" icon="fa-bed">
            <div class="container">
                <div class="hotel-container">
                    <img src="assets/holiday-inn.png" />
                    <p>1001 Amber Avenue <br/> Stevens Point, WI 54482</p>
                    <p><i class="fa fa-phone"></i><a href="tel:715-344-0200">715-344-0200</a></p>
                </div>
                <div class="text-container">
                    <p>A wedding block will be available at the Holiday Inn, which is right off of US Highway 10. Call and ask 
                    to be put in the "Heroux/Evenson" wedding block. Space is limited!</p>
                    <p>Check in is at 3:00PM and check out is at 12:00PM. Shuttles will be available for rides to the hotel
                    following the reception at Sentry World.</p>
                </div>
            </div>
        </app-content-wrapper>
    `,
    styles: [`
        :host >>> .content-container {
            display: flex;
        }

        .container {
            flex: 1;
            display: flex;
            align-self: center;
            justify-content: center;
        }

        @media(orientation: landscape) { .container { flex-direction: row; } }
        @media(orientation: portrait) { .container { flex-direction: column; text-align: justify; } }

        .hotel-container {
            text-align: center;
        }

        i {
            margin-right: 5px;
            color: pink;
        }

        img {
            height: 15vmax;
        }

        @media(orientation: landscape) {
            .text-container {
                padding: 10vh;
            }
        }
    `]
})
export class LodgingComponent { }
