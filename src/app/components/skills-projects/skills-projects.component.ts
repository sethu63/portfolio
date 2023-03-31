import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-projects',
  templateUrl: './skills-projects.component.html',
  styleUrls: ['./skills-projects.component.css']
})
export class SkillsProjectsComponent {
  Skills: string[] = [
    "Java", "Angular", "HTML,CSS", "Python", "JS & TS", "SQL", "Php", "R","Eclipse", 
    "MSOffice", "AWS", "VSCode", "Git, GitHub", "Linux", "Windows"
  ]
  Projects = [
    {
      title: "Portfolio wesite using Angular.",
      link: "https://www.sethugs.me",
      work: "Individual"
    },
    {
      title: "Car rental web application.",
      link: "#",
      work: "Group"
    },
    {
      title: "TedX Data Analysis using python",
      link: "https://github.com/sethu63/TedX_DataAnalysis",
      work: "Individual"
    },
    {
      title: "Body Mass Index Calculator",
      link: "https://github.com/sethu63/bmi-calculator",
      work: "Individual"
    },
  ];

  openProjectLink(projectLink: string) {
    window.open(projectLink, '_blank');
  }
}
