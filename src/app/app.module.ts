import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RewardsComponent } from './components/rewards/rewards.component';
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
import { DegreesComponent } from './components/degrees/degrees.component';
import { TopicsComponent } from './components/topics/topics.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProgressComponent,
    RewardsComponent,
    SubjectsComponent,
    QuestionsComponent,
    SigninComponent,
    SignupComponent,
    CoursesComponent,
    DegreesComponent,
    TopicsComponent,
    CourseDetailsComponent
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
    FlexLayoutModule,
    NgxPaginationModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
