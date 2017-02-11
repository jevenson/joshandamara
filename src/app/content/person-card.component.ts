import { Component, Input } from '@angular/core';
import { PersonCardModel } from './person-card.model';

@Component({
    selector: '[app-person-card]',
    template: `
        <div class="person-card-image-container" [ngStyle]="{'background-image': 'url(' + config.imageUrl + ')'}">
        </div>
        <div class="person-card-text-container">
            <h3>{{ config.name }}</h3>
            <p>{{ config.position }}</p>
        </div>
    `,
    styles: [`
        :host {
            text-align: center;
            border: 10px solid pink;
            box-sizing: border-box;
            display: flex;
        }

        @media (orientation: portrait) {
            :host {
                height: 20%;
                width: 46%;
                margin: 2%;
            }
        }

        @media (orientation: landscape) {
            :host {
                height: 44%;
                width: 20%;
                margin: 2%;
                flex-direction: column;
            }
        }

        .person-card-image-container {
            flex: 4;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        .person-card-text-container {
            margin: 10% 0;
            display: flex;
            flex: 6;
            @media (orientation: landscape) { flex: 4; }
            flex-wrap: wrap;
            justify-content: center;
        }

        @media (orientation: landscape) {
            .person-card-image-container { flex: 6; }
            .person-card-text-container { flex: 4; }
        }

        h3 {
            margin: 0;
            align-self: center;
        }

        p {
            margin: 0;
            align-self: flex-end;
        }
    `]
})
export class PersonCardComponent {
    @Input() public config: PersonCardModel;

    // <img src="{{ config.imageUrl }}" />
}