import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { IntroComponent } from './components/intro/intro.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SkillsProjectsComponent } from './components/skills-projects/skills-projects.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'skills_&_projects',
    component: SkillsProjectsComponent
  },
  {
    path: 'certifications',
    component: CertificationsComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
