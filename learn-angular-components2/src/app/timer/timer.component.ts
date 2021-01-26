import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'], 
  providers: [TimerService], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init:number = 20;

  private countdownEndSubscription:Subscription = null;
  private countdownSubscription:Subscription = null;
  public countdown:number = 0;

  get progress() {
    console.log(">> Console output to control the calculation of the progress ", this.countdown)
    return (this.init - this.countdown) / this.init * 100;
  }

  constructor(public timerService:TimerService, private changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.timerService.restartCountdown(this.init);

    this.countdownEndSubscription = this.timerService.countdownEnd$.subscribe(()=>{
      console.log("--FIN. El Observable suscrito del Subject en el Servicio, ha notificado 'next()' al llegar a 0--");
      this.onComplete.emit();
    });

    this.countdownSubscription = this.timerService.countdown$.subscribe((data)=>{
      this.countdown = data;
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy(){
    this.timerService.destroy();
    this.countdownEndSubscription.unsubscribe();
    this.countdownSubscription.unsubscribe();
  }
}
