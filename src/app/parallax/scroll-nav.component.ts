import { Component, Input } from '@angular/core';

@Component({
    selector: 'scroll-nav',
    template: `
            <span
                *ngIf="aboveTarget"
                (click)="onUpClick()"
                class="scroll-btn scroll-btn-up fa fa-angle-up"
                [class.scroll-btn-alt]="alternate"></span>
            <span
                *ngIf="belowTarget"
                (click)="onDownClick()"
                class="scroll-btn scroll-btn-down fa fa-angle-down"
                [class.scroll-btn-alt]="alternate"></span>
    `,
    styles: [`
        .scroll-btn {
            display: flex;
            align-items: center;
            justify-content: center;

            z-index: 10;
            position: absolute;
            top: auto;
            right: 2vw;

            /* fix for rendering issues */
            transform: translateZ(0);

            color: white;
            font-size: 3vh;
            border: 4px solid white;
            background: rgba(0, 0, 0, 0.2);
            cursor: pointer;

            width: 7vh;
            max-width: 100px;
            min-width: 45px;

            height: 7vh;
            max-height: 100px;
            min-height: 45px;
        }

        .scroll-btn-up {
            top: 2vh;
        }

        .scroll-btn-down {
            bottom: 2vh;
        }

        .scroll-btn-alt {
            color: rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.5);
            background: transparent;
        }
    `]
})
export class ScrollNavComponent {

    @Input() public aboveTarget: string = null;
    @Input() public belowTarget: string = null;
    @Input() private alternate: boolean = false;

    private getTargetOffset(target: string) {
        let result: number = 0;

        if (target) {
            result = $('#' + target).offset().top;
        }

        return result;
    }

    private onUpClick(): void {
        this.scroll(this.aboveTarget);
    }

    private onDownClick(): void {
        this.scroll(this.belowTarget);
    }

    private scroll(target: string): void {
        $('.parallax').animate({
            scrollTop: $('.parallax').scrollTop() + $('#' + target).position().top
        }, 1500);
    }
}