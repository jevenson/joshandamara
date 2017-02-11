import { Component } from '@angular/core';

@Component({
    selector: 'app-home-page',
    template: `
        <app-parallax-list>
            <app-parallax-group backgroundClass="hero" identifier="hero">
                <div class="hero-container">
                    <h1>amara &amp; joshua</h1>
                    <hr/>
                    <h2>september 2nd, 2016</h2>
                </div>
            </app-parallax-group>
            <app-parallax-group identifier="two">
                <app-our-story></app-our-story>
            </app-parallax-group>
            <app-parallax-group backgroundClass="background1" identifier="three">
                <app-countdown></app-countdown>
            </app-parallax-group>
            <app-parallax-group  identifier="four">
                <app-wedding-party></app-wedding-party>
            </app-parallax-group>
            <app-parallax-group backgroundClass="background2" identifier="five">
                <h1 class="title">F I V E</h1>
            </app-parallax-group>
            <app-parallax-group identifier="six">
                <h1 class="title">S I X</h1>
            </app-parallax-group>
            <app-parallax-group backgroundClass="background3" identifier="seven">
                <h1 class="title">S E V E N</h1>
            </app-parallax-group>
            <app-parallax-group identifier="eight">
                <h1 class="title">E I G H T</h1>
            </app-parallax-group>
        </app-parallax-list>
    `,
    styleUrls: ['./home-page.component.less']
})
export class HomePageComponent { }
