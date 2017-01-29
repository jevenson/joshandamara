import { Component } from '@angular/core';

@Component({
    selector: 'app-wedding-party',
    template: `
        <app-content-wrapper title="wedding party" icon="fa-users">
            <div class="person-card-container">
                <div class="person-card-row">
                    <div class="person-card">
                        <img src="https://pbs.twimg.com/profile_images/747121470623514625/he98BkHY.jpg" />
                        <h3>This Alien</h3>
                        <p>ayy lmao</p>
                    </div>
                    <div class="person-card">
                        <img src="https://pbs.twimg.com/profile_images/747121470623514625/he98BkHY.jpg" />
                        <h3>This Alien</h3>
                        <p>ayy lmao</p>
                    </div>
                    <div class="person-card">
                        <img src="https://pbs.twimg.com/profile_images/747121470623514625/he98BkHY.jpg" />
                        <h3>This Alien</h3>
                        <p>ayy lmao</p>
                    </div>
                    <div class="person-card">
                        <img src="https://pbs.twimg.com/profile_images/747121470623514625/he98BkHY.jpg" />
                        <h3>This Alien</h3>
                        <p>ayy lmao</p>
                    </div>
                </div>
                <div class="person-card-row">
                    <div class="person-card">
                        <img src="https://pbs.twimg.com/profile_images/747121470623514625/he98BkHY.jpg" />
                        <h3>This Alien</h3>
                        <p>ayy lmao</p>
                    </div>
                    <div class="person-card">
                        <img src="https://pbs.twimg.com/profile_images/747121470623514625/he98BkHY.jpg" />
                        <h3>This Alien</h3>
                        <p>ayy lmao</p>
                    </div>
                    <div class="person-card">
                        <img src="https://pbs.twimg.com/profile_images/747121470623514625/he98BkHY.jpg" />
                        <h3>This Alien</h3>
                        <p>ayy lmao</p>
                    </div>
                    <div class="person-card">
                        <img src="https://pbs.twimg.com/profile_images/747121470623514625/he98BkHY.jpg" />
                        <h3>This Alien</h3>
                        <p>ayy lmao</p>
                    </div>
                </div>
            </div>
        </app-content-wrapper>
    `,
    styles: [`
        .person-card-container {
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .person-card-row {
            height: 46%;
            margin: 2% 0;
            display: flex;
            flex-direction: row;
        }

        .person-card {
            height: 100%;
            width: 25%;
            text-align: center;
            border: 10px solid pink;
            display: inline-block;
            margin: 1vw;
        }

        .person-card img {
            height: 60%;
            width: 100%
        }

        .person-card h3 {
            margin: 2px 0;
        }

        .person-card p {
            margin: 0;
        }
    `]
})
export class WeddingPartyComponent { }
