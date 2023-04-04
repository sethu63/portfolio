import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Portfolio';

  links = [  
    { route: '', name: 'IntroComponent' },  
    { route: 'experience', name: 'ExperienceComponent' },  
    { route: 'education', name: 'EducationComponent' },
    { route: 'skills_&_projects', name: 'SkillsProjectsComponent' },
    { route: 'certifications', name: 'CertificationsComponent' },
  ];

  currentLinkIndex = 0;

  previous() {
    if (this.currentLinkIndex > 0) {
      this.currentLinkIndex--;
      this.router.navigate([this.links[this.currentLinkIndex].route]);
    }
  }

  next() {
    if (this.currentLinkIndex < this.links.length - 1) {
      this.currentLinkIndex++;
      this.router.navigate([this.links[this.currentLinkIndex].route]);
    }
  }
  constructor(private router: Router) {
    
  }
  ngOnInit(): void {
    
  }
}
