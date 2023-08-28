import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClassesComponent } from './components/classes/classes.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [

 {
   path:'',
   component:SigninComponent
 },
 
 {path: 'ELearning', component:NavbarComponent,children: [
  {path:'courses', component:ClassesComponent},
  {path:'classes', component:ClassesComponent},
  {path:'subjects', component:SubjectsComponent},
  {path:'progress', component:ProgressComponent},
  {path:'rewards', component:RewardsComponent},
  {path:'questions', component:QuestionsComponent},
 
]}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
