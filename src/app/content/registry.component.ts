import { Component } from '@angular/core';

@Component({
    selector: 'app-registry',
    template: `
        <app-content-wrapper header="registry" icon="fa-gift">
            <div class="registry-container">
                <a class="button registry-button amazon" href="https://www.amazon.com/wedding/amara-heroux-joshua-evenson-stevens-point-september-2017/registry/35MFE174OJXE0" target="_blank"></a>
                <a class="button registry-button kohls" href="https://www.kohls.com/upgrade/gift_registry/kohlsgrw_home.jsp?section=list&listid=3316883&viewtype=listview&isfromsearch=true&fname=amara&lname=heroux&regtype=registry.wedding,registry.baby,registry.splday" target="_blank"></a>
            </div>
        </app-content-wrapper>
    `,
    styles: [`
        :host >>> h1 {
            color: white;
            text-shadow: 2px 2px black;
        }

        :host >>> h1 i {
            color: white;
            text-shadow: 2px 2px black;
        }

        .registry-container {
            height: 100%;
            width: 100%;
            display: flex;
            margin: 0 auto;
            align-items: flex-end;
        }

        @media(max-width: 850px) {
            .registry-container {
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
            }
        }

        .registry-button {
            height: 70px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            background-color: white;
            opacity: 1;
            margin: 50px;
            width: 35%;
        }

        .registry-button:hover {
            opacity: .8;
        }

        @media(max-width: 850px) {
            .registry-button {
                width: 80%;
                margin: 15px;
            }
        }

        .amazon {
            background-image: url(./assets/amazon.jpg);
        }

        .kohls {
            background-image: url(./assets/kohls.png);
            background-size: 50%;
        }
    `]
})

export class RegistryComponent { }