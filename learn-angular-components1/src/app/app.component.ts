import { Component } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component'; 
import { CountdownComponent } from './countdown/countdown.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular-components1';

  porcentualCounterProgress:number = 0;
  totalCountdown:number = 15;

  constructor() { }

  updateProgress($event) {
    this.porcentualCounterProgress = (this.totalCountdown - $event)/this.totalCountdown * 100; 
  }

  countdownFinished() {
    console.log("Finalizada la cuenta del componente");
  }
}
