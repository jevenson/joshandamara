import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    template: `
        <parallax-list>
            <parallax-group backgroundClass="hero" identifier="hero">
                <div class="hero-container">
                    <h1>amara &amp; joshua</h1>
                    <hr/>
                    <h2>september 2nd, 2016</h2>
                </div>
            </parallax-group>
            <parallax-group identifier="two">
                <content-wrapper title="our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum.</p>
                </content-wrapper>
            </parallax-group>
            <parallax-group backgroundClass="background1" identifier="three">
                <countdown></countdown>
            </parallax-group>
            <parallax-group  identifier="four">
                <h1 class="title">F O U R</h1>
            </parallax-group>
            <parallax-group backgroundClass="background2" identifier="five">
                <h1 class="title">F I V E</h1>
            </parallax-group>
            <parallax-group identifier="six">
                <h1 class="title">S I X</h1>
            </parallax-group>
            <parallax-group backgroundClass="background3" identifier="seven">
                <h1 class="title">S E V E N</h1>
            </parallax-group>
            <parallax-group identifier="eight">
                <h1 class="title">E I G H T</h1>
            </parallax-group>
        </parallax-list>
    `,
    styleUrls: ['./home-page.component.less']
})
export class HomePageComponent { }
