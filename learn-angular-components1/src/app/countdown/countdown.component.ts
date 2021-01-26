import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  @Input() init: number = null;

  public countdownCounter: number = 0;
  private countdownTimerRef:any = null;

  constructor() { }

  ngOnInit() {
    this.startCountdown();
  }
  
  doCountdown() {
    this.countdownTimerRef = setTimeout(
      () => {
        this.countdownCounter = this.countdownCounter - 1;
        this.processCountdown();
      }
      , 1000
    );
  }
  
  private killMyTimer() {
    if(this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }
  
  processCountdown() {
    this.onDecrease.emit(this.countdownCounter);
    console.log("Emisión de evento REGRESSIVE COUNT STEP. Valor actual: ", this.countdownCounter);

    if (this.countdownCounter == 0) {
      this.onComplete.emit();
      console.log("--CUENTA FINALIZADA, el valor ha bajado hasta CERO--");
    }
    else {
      console.log("└-→  Se lanza otro segundo de descuento.");
      this.doCountdown();
    }
  }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.killMyTimer();
      this.countdownCounter = this.init;
      this.doCountdown();
    }
  }

}
