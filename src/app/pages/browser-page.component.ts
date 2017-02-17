import { Component } from '@angular/core';

@Component({
    selector: 'app-browser',
    template: `
        <div class="container">
            <div class="text-container">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>amara & josh</h1>
                <h2>september 2nd, 2017</h2>
            
                <p>Sorry, it looks like your browser isn't compatible with our site.</p>

                <a href="https://www.google.com/chrome/browser/desktop/index.html">
                    <p>Google Chrome is recommended.</p>
                </a>
            </div>
        </div>
    `,
    styles: [`
        h1, h2 { margin: 0; }

        .container {
            text-align: center;
            height: 100vh;
            width: 100vw;
            background-color: black;
            background: url(assets/bkg1.jpg);
            background-position: center;
            background-size: cover;
        }

        .text-container {
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            display: block;
            height: 100%;
        }

        a { text-decoration: underline; color: white;}
    `]
})
export class BrowserComponent {
    constructor() { }
}
