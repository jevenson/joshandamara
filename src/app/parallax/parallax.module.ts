import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxListComponent }   from './parallax-list.component';
import { ParallaxGroupComponent }   from './parallax-group.component';
import { ParallaxBackgroundComponent }   from './parallax-background.component';
import { ParallaxForegroundComponent }   from './parallax-foreground.component';

import { ScrollNavComponent } from './scroll-nav.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ParallaxListComponent,
        ParallaxGroupComponent,
        ParallaxBackgroundComponent,
        ParallaxForegroundComponent
    ],
    declarations: [
        ParallaxListComponent,
        ParallaxGroupComponent,
        ParallaxBackgroundComponent,
        ParallaxForegroundComponent,
        ScrollNavComponent
    ],
    providers: [],
})
export class ParallaxModule { }