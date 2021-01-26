import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  logCountdownEnd() {
    console.log("--FIN. El componente Timer lanzó un EventEmitter ad-hoc 'OnComplete' cuando se le notificó que el valor llegó a 0--");
  }

}
