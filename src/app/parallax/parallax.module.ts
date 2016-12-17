import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxComponent }   from './parallax.component';

@NgModule({
    imports: [CommonModule],
    exports: [ParallaxComponent],
    declarations: [ParallaxComponent],
    providers: [],
})
export class ParallaxModule { }
