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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
    ReactiveFormsModule,
    DefaultProfModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
