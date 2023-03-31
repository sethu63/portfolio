import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  jobs = [
    {title: "Martian Summer Intern", company: "Persistent Systems", startMonth: "May", startYear: 2021, endMonth: "Jun", endYear: 2021},
    {title: "Data Analyst Intern", company: "AICTE - EduSkills", startMonth: "Mar", startYear: 2021, endMonth: "Apr", endYear: 2021},
  ];
}
