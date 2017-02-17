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
                    <p><strong>Check-In:</strong> 3:00 p.m.</p>
                    <p><strong>Check-Out:</strong> 12:00 p.m.</p>
                </div>
                <div class="text-container">
                    <p>The bride and groom booked a block of rooms at the Holiday Inn. If you would like to book a hotel room,
                       please call and mention the “Heroux/Evenson” room block. Rooms will go fast, as it is a holiday weekend. Please book early!</p>
                    <p>A shuttle will be available from the Holiday Inn to SentryWorld before and after the wedding.</p>
                    <p>If you have any questions about accommodations, please contact the Holiday Inn or the bride or groom.</p>
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
            width: 100%;
        }

        @media(orientation: landscape) { .container { flex-direction: row; } }
        @media(orientation: portrait) { .container { flex-direction: column; text-align: justify; } }

        .hotel-container {
            text-align: center;
            align-self: center;
        }

        i {
            margin-right: 5px;
            color: pink;
        }

        img {
            height: 175px;
            height: 15vmax;
        }

        @media(orientation: landscape) {
            .text-container {
                padding: 10vh;
                text-align: justify;
            }
        }
    `]
})
export class LodgingComponent { }
