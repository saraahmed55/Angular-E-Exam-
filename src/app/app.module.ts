import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './accounts/first/first.component';
import { StudentLoginComponent } from './accounts/student-login/student-login.component';
import { ProfLoginComponent } from './accounts/prof-login/prof-login.component';
import { LogoutComponent } from './accounts/logout/logout.component';
import { StudentHomeComponent } from './student-component/student-home/student-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentAccountComponent } from './student-component/student-account/student-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './admin/lauouts/default/default.module';
import { StudentsComponent } from './admin/modules/students/students.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultProfModule } from './professor/layouts/default-prof/default-prof.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StudentExamsComponent } from './student-component/student-exams/student-exams.component';
import { SubjectDetailsComponent } from './student-component/subject-details/subject-details.component';
import { ExamComponent } from './student-component/exam/exam.component';
import { SubmitComponent } from './student-component/submit/submit.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import { DatePipe } from '@angular/common';


const appRoutes:Routes = [
  {path:'',component:StudentsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    StudentLoginComponent,
    ProfLoginComponent,
    LogoutComponent,
    StudentHomeComponent,
    NotFoundComponent,
    StudentAccountComponent,
    StudentExamsComponent,
    SubjectDetailsComponent,
    ExamComponent,
    SubmitComponent









  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    DefaultModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatTabsModule,
    MatDividerModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    ReactiveFormsModule,
    DefaultProfModule,
    MatRadioModule,
    MatSliderModule,
    MatCardModule,
    MatBadgeModule




  ],
  providers: [DatePipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
