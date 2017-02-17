import { Component } from '@angular/core';

@Component({
    selector: 'app-home-page',
    template: `
        <app-parallax-list>
            <app-parallax-group backgroundClass="hero" identifier="hero">
                <div class="hero-container">
                    <h1>amara &amp; joshua</h1>
                    <hr/>
                    <h2>september 2nd, 2017</h2>
                </div>
            </app-parallax-group>
            <app-parallax-group identifier="two">
                <app-our-story></app-our-story>
            </app-parallax-group>
            <app-parallax-group backgroundClass="background1" identifier="three">
                <app-countdown></app-countdown>
            </app-parallax-group>
            <app-parallax-group  identifier="four">
                <app-event></app-event>
            </app-parallax-group>
            <app-parallax-group backgroundClass="background2" identifier="five">
            </app-parallax-group>
            <app-parallax-group identifier="six">
                <app-lodging></app-lodging>
            </app-parallax-group>
            <app-parallax-group backgroundClass="background3" identifier="seven">
                <app-hero-text top="true">Get ready to pop the champagne!</app-hero-text>
            </app-parallax-group>
            <app-parallax-group identifier="eight">
                <app-wedding-party></app-wedding-party>
            </app-parallax-group>
        </app-parallax-list>
    `,
    styleUrls: ['./home-page.component.less']
})
export class HomePageComponent { }
