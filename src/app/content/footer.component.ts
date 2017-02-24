import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <p>copyright &copy; 2016 josh evenson</p>
    `,
    styles: [`
        p { text-align: center; }
    `]
})
export class FooterComponent { }