import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @Input() init: number = null;
  public countdownCounter: number = 0;

  constructor() { }

  ngOnInit() {
    this.startCountdown();
  }

  doCountdown() {
    setTimeout(
      () => {
          this.countdownCounter = this.countdownCounter - 1;
          this.processCountdown();
        }
      , 1000);
  }
  
  processCountdown() {
    // emission of event: COUNT
    console.log("Emisión de evento REGRESSIVE COUNT STEP. Valor actual: ", this.countdownCounter);

    if (this.countdownCounter == 0) {
      // emission of event: COUNTER_END
      console.log("--CUENTA FINALIZADA, el valor ha bajado hasta CERO--");
    }
    else {
      console.log("└-→  Se lanza otro segundo de descuento.");
      this.doCountdown();
    }
  }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.countdownCounter = this.init;
      this.doCountdown();
    }
  }

}