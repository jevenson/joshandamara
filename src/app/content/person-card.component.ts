import { Component, Input } from '@angular/core';
import { PersonCardModel } from './person-card.model';

@Component({
    selector: '[app-person-card]',
    template: `
        <img src="{{ config.imageUrl }}" />
        <div class="person-card-text-container">
            <h3>{{ config.name }}</h3>
            <p>{{ config.position }}</p>
        </div>
    `,
    styles: [`
        :host {
            height: 20%;
            width: 44%;
            margin: 2%;
            text-align: center;
            border: 10px solid pink;
            display: flex;
        }

        img {
            height: 100%;
            flex-grow: 1;
        }

        .person-card-text-container {
            margin: 10% 0;
            display: flex;
            flex-grow: 1;
            flex-wrap: wrap;
            justify-content: center;
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
}