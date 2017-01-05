import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxListComponent }   from './parallax-list.component';
import { ParallaxGroupComponent }   from './parallax-group.component';
import { ParallaxBackgroundComponent }   from './parallax-background.component';

@NgModule({
    imports: [CommonModule],
    exports: [ParallaxListComponent, ParallaxGroupComponent,  ParallaxBackgroundComponent],
    declarations: [ParallaxListComponent, ParallaxGroupComponent,  ParallaxBackgroundComponent],
    providers: [],
})
export class ParallaxModule { }
