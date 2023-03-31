import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  courses = [
    {title: "B. Tech in Computer Science & Engineering", university: "B. V. Raju Institute of Technology", startYear: 2019, endYear: 2023, cgpa: 8.1},
  ];
}
