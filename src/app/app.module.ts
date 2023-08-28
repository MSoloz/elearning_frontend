import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { ClassesComponent } from './components/classes/classes.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProgressComponent,
    RewardsComponent,
    ClassesComponent,
    SubjectsComponent,
    QuestionsComponent,
    SigninComponent,
    SignupComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatTableModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
