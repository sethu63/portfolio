import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor() {
    const buildmessage: string = "This site is under build, fixing minor issues/Responsiveness will be active by: 02/04/2023";
    alert(buildmessage);
  }
}
