import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditSkillComponent } from './components/hard-and-soft-skills/edit-skill.component';
import { NewSkillComponent } from './components/hard-and-soft-skills/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'newexperience', component: NewExperienceComponent},
  {path: 'editexperience/:id', component: EditExperienceComponent},
  {path: 'neweducation', component: NewEducationComponent},
  {path: 'editeducation/:id', component: EditEducationComponent}, 
  {path: 'newskill', component: NewSkillComponent}, 
  {path: 'editskill/:id', component: EditSkillComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
