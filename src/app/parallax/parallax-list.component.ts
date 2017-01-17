import { Component, AfterContentInit, QueryList , ContentChildren} from '@angular/core';
import { ParallaxGroupComponent } from './parallax-group.component';

@Component({
    selector: 'parallax-list',
    template: `
        <div class="parallax">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .parallax {
            height: 500px; /* fallback for older browsers */
            height: 100vh;
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-perspective: 300px;
            perspective: 300px;
        }
    `]
})
export class ParallaxListComponent implements AfterContentInit {
    @ContentChildren(ParallaxGroupComponent) private parallaxGroups: QueryList<ParallaxGroupComponent>;

    public ngAfterContentInit(): void {
        if (this.parallaxGroups) {
            let groupsArray: ParallaxGroupComponent[] = this.parallaxGroups.toArray();

            for (let i = 0; i < groupsArray.length; i++) {
                let previousGroup: ParallaxGroupComponent = groupsArray[i - 1];
                let currentGroup: ParallaxGroupComponent = groupsArray[i];
                let nextGroup: ParallaxGroupComponent = groupsArray[i + 1];

                if (currentGroup) {
                    if (previousGroup) {
                        currentGroup.aboveTarget = previousGroup.identifier;
                    }

                    if (nextGroup) {
                        currentGroup.belowTarget = nextGroup.identifier;
                    }
                }
            }
        }
    }
}