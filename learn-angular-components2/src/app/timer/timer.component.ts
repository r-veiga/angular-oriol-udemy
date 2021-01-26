import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'], 
  providers: [TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init:number = 20;

  private countdownEndSubscription:Subscription = null;

  constructor(public timerService:TimerService) { }

  ngOnInit(): void {
    this.timerService.restartCountdown(this.init);

    this.countdownEndSubscription = this.timerService.countdownEnd$.subscribe(()=>{
      console.log("--FIN. El Observable suscrito del Subject en el Servicio, ha notificado 'next()' al llegar a 0--");
      this.onComplete.emit();
    });
  }

  ngOnDestroy(){
    this.timerService.destroy();
    this.countdownEndSubscription.unsubscribe();
  }
}
