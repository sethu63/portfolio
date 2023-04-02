import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  constructor() {
    
  }
  ngOnInit(): void {
    const buildmessage: string = "This site is under build, fixing minor issues/Responsiveness will be active by: 02/04/2023";
    alert(buildmessage);
  }
}
