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
                       please call and mention the “Heroux/Evenson” room block. If booking online, use group code &quot;HEW&quot;.
                       Rooms will go fast, as it is a holiday weekend. Please book early!</p>
                    <p>A shuttle will be available from the Holiday Inn to SentryWorld before and after the wedding.</p>
                    <p>If you have any questions about accommodations, please contact the Holiday Inn or the bride or groom.</p>
                    <a id="booking-btn" target="_blank" href="https://www.holidayinn.com/redirect?path=rates&brandCode=hi&localeCode=en&regionCode=1&hotelCode=STEAA&checkInDate=02&checkInMonthYear=082017&checkOutDate=03&checkOutMonthYear=082017&_PMID=99801505&GPC=HEW&viewfullsite=true">
                        <p>Book Online Today!</p>
                    </a>
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

        #booking-btn {
            display: block;
            color: white;
            background-color: pink;
            width: 50%;
            margin: 0 auto;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            text-decoration: none;
            opacity: .8;
        }

        #booking-btn:hover { opacity: 1; }

        #booking-btn p { margin: 0; }
    `]
})
export class LodgingComponent { }
