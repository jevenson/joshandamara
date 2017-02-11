import { Component, Input } from '@angular/core';
import { PersonCardModel } from './person-card.model';

@Component({
    selector: '[app-person-card]',
    template: `
        <div class="person-card-image-container" [ngStyle]="{'background-image': 'url(' + config.imageUrl + ')'}">
            <div class="person-card-text-container">
                <h3>{{ config.name }}</h3>
                <p>{{ config.position }}</p>
            </div>
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
                height: 46%;
                width: 46%;
                margin: 2%;
                border: 5px solid pink;
            }
        }

        @media (orientation: landscape) {
            :host {
                height: 100%;
                width: 20%;
                margin: 2%;
                flex-direction: column;
            }
        }

        .person-card-image-container {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            display: flex;
            align-items: stretch;
            flex-direction: column;
            flex: 1;
        }

        .person-card-text-container {
            color: white;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.5);
            align-items: flex-end;
            margin-top: auto;
            flex-direction: column;
        }

        h3 {
            margin: 0;
            align-self: center;
            font-size: 1.5vmax;
        }

        p {
            margin: 0;
            align-self: center;
            font-size: 2vmin;
        }
    `]
})
export class PersonCardComponent {
    @Input() public config: PersonCardModel;
}