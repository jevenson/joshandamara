import { Component } from '@angular/core';
import { PersonCardModel } from './person-card.model';

@Component({
    selector: 'app-wedding-party',
    template: `
        <app-content-wrapper title="wedding party" icon="fa-glass">
            <div class="person-card-container">
                <div app-person-card *ngFor="let person of weddingParty" [config]="person"></div>
            </div>
        </app-content-wrapper>
    `,
    styles: [`
        .person-card-container {
            height: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    `]
})
export class WeddingPartyComponent { 

    private alien: string = `https://pbs.twimg.com/profile_images/747121470623514625/he98BkHY.jpg`;
    private baseUrl: string = '/assets/wedding-party/';

    public weddingParty: PersonCardModel[] = [
        new PersonCardModel('Brooke Heroux', 'Maid of Honor', this.getImageUrl('brooke.jpg')),
        new PersonCardModel('Kiahna Heroux', 'Bridesmaid', this.getImageUrl('kiahna.jpg')),
        new PersonCardModel('Meghan Schmidt', 'Bridesmaid', this.getImageUrl('meghan.jpg')),
        new PersonCardModel('Elizabeth Boehnlein', 'Junior Bridesmaid',  this.getImageUrl('lizzy.jpg')),
        new PersonCardModel('James Verbrick', 'Best Man',  this.getImageUrl('james.jpg')),
        new PersonCardModel('Zachary Alger', 'Groomsman',  this.getImageUrl('zach.jpg')),
        new PersonCardModel('Joao Castro Silva Jr.', 'Groomsman',  this.getImageUrl('joao.jpg')),
        new PersonCardModel('Aidan Boehnlein', 'Junior Groomsman', this.alien)
    ];

    private getImageUrl(filename: string): string {
        return this.baseUrl + filename;
    }
}
