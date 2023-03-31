import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit{
  quote!: string[];
  
  quotes: string[] = [
    "If you are scared of losing, you're already lost.",
    "No step is small, as long as it is headed in the direction where we want to go.",
    "A little progress each day, adds up to great results.",
    "Your degree is just a paper, your education is seen in your behavior."
  ];

  
  
  ngOnInit() {
    let index = Math.floor(Math.random() * this.quotes.length);
    this.quote = this.quotes[index].split(',');
  }

}
