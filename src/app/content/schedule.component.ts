import { Component } from '@angular/core';

@Component({
    selector: 'app-schedule',
    template: `
        <app-content-wrapper header="schedule" icon="fa-clock-o">
            <div class="container">
                <p>All wedding events will be held at SentryWorld in Stevens Point, WI.
                   The bride and groom are requesting that guests dress in formal attire.</p>

                <ng-container *ngFor="let event of events">
                    <h3 class="content-font">
                        <span>{{ event.name }}</span>
                        <span>{{ event.time }}</span>
                    </h3>
                    <p class="description">{{ event.description }}</p>
                </ng-container>
            </div>
        </app-content-wrapper>
    `,
    styles: [`
        .container {
            display: flex;
            flex-direction: column;
            align-items: space-between;
        }

        h3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }

        .description {
            margin-bottom: 0;
            padding-bottom: 10px;
            border-bottom: 5px solid pink;
        }
    `]
})
export class ScheduleComponent {
    public events: any[] = [
        {
            "name": "Ceremony",
            "time": "3:30 p.m.",
            "description": "The wedding ceremony will be held outdoors under the new pergola on SentryWorld's grounds."
        },
        {
            "name": "Cocktail Hour",
            "time": "4:30 p.m.",
            "description": "Cocktails and hors d’oeuvres will be served in the Grand Hall."
        },
        {
            "name": "Dinner & Reception",
            "time": "6:00 p.m.",
            "description": "Join us for a seated dinner in the Grand Hall followed by dancing and live music."
        }
    ];
}
