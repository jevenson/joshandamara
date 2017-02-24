import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-credits',
    template: `
        <div class="header">
            <h1>amara &amp; josh</h1>
            <h2>credits</h2>
        </div>

        <ng-container *ngFor="let credit of creditList">
            <h3 class="credits-title">
                <a href="{{ credit.link }}">{{ credit.title }}</a>
            </h3>
            
            <p>{{ credit.job }}</p>
        </ng-container>

        <br />
        <br />

        <app-footer></app-footer>
    `,
    styles: [`
        * { text-align: center; }

        hr { width: 20%; }

        h3 {
            margin: 1em 0 0;
            text-decoration: underline;
        }

        a:hover {
            color: pink;
        }

        p { margin-top: 0; }

        .header {
            background-color: pink;
            color: white;
        }

        .header h1, .header h2 {
            margin: 0;
        }
    `]
})
export class CreditsPageComponent {

    public creditList: any[] = [
        {
            "title": "Jadranka Isabel Photography",
            "job": "Engagement and Wedding Photography",
            "link": "http://www.jadrankaisabelphotography.weebly.com/"
        },
        {
            "title": "Distinctly Yours Wedding and Events",
            "job": "Wedding Planner",
            "link": "http://www.stevenspointweddingplanner.com/"
        },
        {
            "title": "SentryWorld",
            "job": "Wedding and Reception Venue",
            "link": "http://www.sentryworld.com/"
        },
        {
            "title": "Katie Boeckman Photography",
            "job": "Photo of Groomsman, Zachary Alger",
            "link": "https://www.facebook.com/katieboeckmanphotography/"
        }
    ];

}