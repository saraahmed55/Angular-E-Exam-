import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './accounts/first/first.component';
import { LogoutComponent } from './accounts/logout/logout.component';
import { ProfLoginComponent } from './accounts/prof-login/prof-login.component';
import { StudentLoginComponent } from './accounts/student-login/student-login.component';
import { DefaultComponent } from './admin/lauouts/default/default.component';
import { AdminListComponent } from './admin/modules/admin-list/admin-list.component';
import { DashboardComponent } from './admin/modules/dashboard/dashboard.component';
import { DepatementComponent } from './admin/modules/depatement/depatement.component';
import { ExamsListComponent } from './admin/modules/exams-list/exams-list.component';
import { ProfessorListComponent } from './admin/modules/professor-list/professor-list.component';
import { ProfsComponent } from './admin/modules/profs/profs.component';
import { QuestionLayoutComponent } from './admin/modules/question-layout/question-layout.component';
import { QuestionTrueOrfalseComponent } from './admin/modules/question-true-orfalse/question-true-orfalse.component';
import { QuestionsComponent } from './admin/modules/questions/questions.component';
import { ResultsComponent } from './admin/modules/results/results.component';
import { RolesListComponent } from './admin/modules/roles-list/roles-list.component';
import { StudentsComponent } from './admin/modules/students/students.component';
import { SubjectsComponent } from './admin/modules/subjects/subjects.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentAccountComponent } from './student-component/student-account/student-account.component';
import { StudentHomeComponent } from './student-component/student-home/student-home.component';

const routes: Routes = [
  {path:'first' , component: FirstComponent},
  {path:'studentLogin' , component:StudentLoginComponent},
  {path:'profLogin', component:ProfLoginComponent},
  {path:'logout' , component:LogoutComponent},
  {path:'studentHome' , component:StudentHomeComponent},
  {path:'notFound' , component:NotFoundComponent},
  {path:'studentAccount' , component:StudentAccountComponent},

  {
    path:'',
    component:DefaultComponent,
    children:[{
      path:'' ,
      component:DashboardComponent
    },

  {
    path:'students',
    component:StudentsComponent
  },

  {
    path:'departs',
    component:DepatementComponent
  },

  {
    path:'profs',
    component:ProfsComponent
  },

  {
    path:'subjects',
    component:SubjectsComponent
  },

  {
    path:'questions',
    component:QuestionsComponent
  },

  {
    path:'results',
    component:ResultsComponent
  },
  {
    path:'question-layout',
    component:QuestionLayoutComponent
  },

  {
    path:'question-mcq',
    component:QuestionsComponent
  },

  {
    path:'question-TorF',
    component:QuestionTrueOrfalseComponent
  },
  {
    path:'professor_roles',
    component:RolesListComponent
  },
  {
    path:'Admin_list',
    component:AdminListComponent
  },
  {
    path:'professor_list',
    component:ProfessorListComponent
  },
  {
    path:'exams_list',
    component:ExamsListComponent
  },




]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
