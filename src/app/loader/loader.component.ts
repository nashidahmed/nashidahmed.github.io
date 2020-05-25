import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { interval, Subject, iif, of } from 'rxjs';
import { takeUntil, timeout, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-loader',
    animations: [
        // Each unique animation requires its own trigger. The first argument of the trigger function is the name
        trigger('animatedState', [
            state('rotate', style({ transform: 'rotate(0deg)' })),
            state('bounce', style({ transform: 'translate(0, 0px)' })),
            transition('* => rotate', 
                animate('4s ease-in-out', keyframes([
                    style({ transform: 'rotate(0deg)' }),
                    style({ transform: 'rotate(1080deg)' })
                ]))
            ),
            transition('* => bounce',
                animate('1.5s', keyframes([
                    style({ transform: 'translate(0, 0)' }),
                    style({ transform: 'translate(0, -3rem)' }),
                    style({ transform: 'translate(0, 0)' }),
                    style({ transform: 'translate(0, -2rem)' }),
                    style({ transform: 'translate(0, 0)' })
                ]))
            ),
        ]),
        trigger('resizeState', [
            state('default', style({ width: '100%', margin: '0 auto' })),
            state('resize', style({ width: '100%', margin: '0 auto' })),
            transition('* => resize',
                animate('1.5s', keyframes([
                    style({ width: '100%', margin: '0 0' }),
                    style({ width: '45%', margin: '0 25%' }),
                    style({ width: '90%', margin: '0 5%' }),
                    style({ width: '60%', margin: '0 18%' }),
                    style({ width: '100%', margin: '0 0' }),
                ]))
            ),
        ])
    ],
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

    logoState: string = 'default';
    shadowState: string = 'default';
    nextTrigger: number = 3000;
    rotateDuration: number = 4100;
    bounceDuration: number = 3000;
    private destroy$ = new Subject();

    constructor() { }

    ngOnInit(): void {
        const subject = new Subject();
        subject
            .pipe(
                switchMap((period: number) => interval(period)),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.logoState = (this.logoState === 'bounce' ? 'rotate' : 'bounce');
                this.shadowState = (this.shadowState === 'resize' ? 'default' : 'resize');
                subject.next(this.logoState === 'bounce' ? this.bounceDuration: this.rotateDuration);
            });

        this.logoState = 'rotate';
        subject.next(this.rotateDuration);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
    }
}
