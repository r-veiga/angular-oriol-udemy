import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
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

  constructor(public timerService:TimerService) { }

  ngOnInit(): void {
    this.timerService.restartCountdown(this.init);
  }

  ngOnDestroy(){
    this.timerService.destroy();
  }
}
