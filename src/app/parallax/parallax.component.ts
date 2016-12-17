import { Component, Input } from '@angular/core';
import { ParallaxConfig } from './parallax.config';

@Component({
    selector: 'parallax',
    templateUrl: './parallax.component.html',
    styleUrls: ['./parallax.component.less']
})
export class ParallaxComponent {
    @Input() navUpHref: string;
    @Input() navDownHref: string;
    @Input() config: ParallaxConfig;
}