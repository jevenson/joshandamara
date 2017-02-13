import { Component } from '@angular/core';

@Component({
    selector: 'app-our-story',
    template: `
        <app-content-wrapper header="our story" icon="fa-heart">
            <div class="text-wrapper">
                <p>Amara and Josh first met at Neenah High School, when Josh bought a chocolate bar she 
                    was selling for a softball fundraiser. Little did they know, just a year later they would start dating! 
                    They were both enrolled in a bicycling class and started to get to know each other. Homecoming was 
                    just around the corner, so Josh decided to ask Amara to the big dance. Unfortunately for Josh, she said no! 
                    She already had a date. Amara came around though, and decided she wanted to go with Josh anyway. 
                    After asking a second time, they went together and had an amazing night.</p>
                <p>Seven years later, and they're getting married! After they both graduated from the University of 
                    Wisconsin - Stevens Point, Josh started planning the engagement. One Friday in March of 2016, Josh 
                    picked Amara up early from work to take her to catch a plane bound for Charleston, South Carolina. 
                    They toured the historic city in horse and buggy, walked through the city market, and visited the city 
                    aquarium. After a very long day, they took a walk down the coast of the city to White Point Garden, 
                    where Josh proposed and she said yes!</p>
            </div>
        </app-content-wrapper>
    `,
    styles: [`
        .text-wrapper {
            display: flex;
        }

        @media (orientation: landscape) { .text-wrapper { flex-direction: row; } }
        @media (orientation: portrait) { .text-wrapper { flex-direction: column; } }

        p {
            flex: 1;
            margin: 2vw;
            text-align: justify;
        }

        @media (min-width: 1300px) { p { font-size: 3.5vmin; } }
        @media (max-width: 1300px) { p { font-size: 3vmin; } }
        @media (max-width: 500px) { p { font-size: 3.5vmin; } }
    `]
})
export class OurStoryComponent { }
