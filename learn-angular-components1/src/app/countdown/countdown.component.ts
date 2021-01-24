import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  ngOnInit() {
    if(this.init && this.init > 0) {
      this.counter = this.init;
    }
  }

  @Input() init:number;
  counter:number = 0;

  constructor() { 
  }

}
