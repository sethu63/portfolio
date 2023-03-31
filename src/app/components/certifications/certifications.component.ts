import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
  certificates = [
    {
      link: "OCJA.jpg",
      title: "Oracle Certified Associate, Java SE-8 Programmer",
      authority: "Oracle"
    },
    {
      link: "Learning_Java.png",
      title: "Java Course Completion Certificate",
      authority: "LinkedIn Learning"
    },
    {
      link: "Java_Udemy.png",
      title: "Java Programming",
      authority: "Udemy"
    },
    {
      link: "google_da_1.png",
      title: "Foundations: Data Analytics",
      authority: "Google, Coursera"
    },
    {
      link: "google_da_2.png",
      title: "Ask Questions to Make Data Driven Decisions",
      authority: "Google, Coursera"
    },
    {
      link: "oop_java.png",
      title: "Object Orented Programming with Java",
      authority: "Coursera"
    },
  ];

  public len: number;
  public certificate: any;
  public i: number = 0;

  constructor() {
    this.len = this.certificates.length;
    this.certificate = this.certificates[this.i];
  }

  public prevCert() {
    this.certificate = this.certificates[--this.i];
  }

  public nextCert() {
    this.certificate = this.certificates[++this.i];
  }


}
