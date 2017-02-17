import { Component } from '@angular/core';
import { PersonCardModel } from './person-card.model';

@Component({
    selector: 'app-wedding-party',
    template: `
        <app-content-wrapper header="wedding party" icon="fa-glass">
            <div class="person-card-container">
                <div app-person-card *ngFor="let person of bridesmaids" [config]="person"></div>
            </div>
            <div class="person-card-container">
                <div app-person-card *ngFor="let person of groomsmen" [config]="person"></div>
            </div>
        </app-content-wrapper>
    `,
    styles: [`
        :host >>> .content-container {
            height: 90%;
        }

        .person-card-container {
            height: 46%;
            margin-bottom: 2%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    `]
})
export class WeddingPartyComponent {
    private baseUrl: string = 'assets/wedding-party/';

    public bridesmaids: PersonCardModel[] = [
        new PersonCardModel('Brooke Heroux', 'Maid of Honor', this.getImageUrl('brooke.jpg')),
        new PersonCardModel('Kiahna Heroux', 'Bridesmaid', this.getImageUrl('kiahna.jpg')),
        new PersonCardModel('Meghan Schmidt', 'Bridesmaid', this.getImageUrl('meghan.jpg')),
        new PersonCardModel('Elizabeth Boehnlein', 'Junior Bridesmaid',  this.getImageUrl('lizzy.jpg'))
    ];

    public groomsmen: PersonCardModel[] = [
        new PersonCardModel('James Verbrick', 'Best Man',  this.getImageUrl('james.jpg')),
        new PersonCardModel('Zachary Alger', 'Groomsman',  this.getImageUrl('zach.jpg')),
        new PersonCardModel('Joao Castro Silva Jr.', 'Groomsman',  this.getImageUrl('joao.jpg')),
        new PersonCardModel('Aidan Boehnlein', 'Junior Groomsman', this.getImageUrl('aidan.jpg'))
    ];

    private getImageUrl(filename: string): string {
        return this.baseUrl + filename;
    }
}
