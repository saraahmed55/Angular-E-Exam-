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
import { DefaultProfComponent } from './professor/layouts/default-prof/default-prof.component';
import { ExamsComponent } from './professor/modules/exams/exams.component';
import { SubjectComponent } from './professor/modules/subject/subject.component';
import { SubjectListComponent } from './professor/modules/subject-list/subject-list.component';
import { SubjectExamsListComponent } from './professor/modules/subject-exams-list/subject-exams-list.component';
import { SubjectStudentsListComponent } from './professor/modules/subject-students-list/subject-students-list.component';
import { SubjectChaptersListComponent } from './professor/modules/subject-chapters-list/subject-chapters-list.component';
import { ChaptersQuestionsComponent } from './professor/modules/chapters-questions/chapters-questions.component';
import { ChaptersQuestionsMcqComponent } from './professor/modules/chapters-questions-mcq/chapters-questions-mcq.component';
import { ChaptersQuestionsTorFComponent } from './professor/modules/chapters-questions-tor-f/chapters-questions-tor-f.component';
import { AdminGuard } from './guards/Admin.guard';
import { StudentExamsComponent } from './student-component/student-exams/student-exams.component';
import { ProfessorGuard } from './guards/Professor.guard';
import { StudentGuard } from './guards/Student.guard';
import { SubjectDetailsComponent } from './student-component/subject-details/subject-details.component';
import { ExamComponent } from './student-component/exam/exam.component';
import { SubmitComponent } from './student-component/submit/submit.component';
import { CreateNewExamComponent } from './professor/modules/create-new-exam/create-new-exam.component';
import { StudentsResultsComponent } from './professor/modules/students-results/students-results.component';
import { ExamsResultComponent } from './professor/modules/exams-result/exams-result.component';


const routes: Routes = [
  {path:'' , component: FirstComponent},
  {path:'studentlogin' , component:StudentLoginComponent},
  {path:'professorlogin', component:ProfLoginComponent},
  {path:'logout' , component:LogoutComponent},
  {path:'notFound' , component:NotFoundComponent},

  //Student Routes
  {path:'student/home' , component:StudentHomeComponent, canActivate:[StudentGuard]},
  {path:'student/account' , component:StudentAccountComponent, canActivate:[StudentGuard]},
  {path:'student/exams' , component:StudentExamsComponent, canActivate:[StudentGuard]},
  {path:'student/subject/:id' , component:SubjectDetailsComponent, canActivate:[StudentGuard]},
  {path:'student/exam/:id' , component:ExamComponent, canActivate:[StudentGuard]},
  {path:'student/submit' , component:SubmitComponent, canActivate:[StudentGuard]},

  {
    path:'admin',
    component:DefaultComponent,
    children:[
  {
    path:'dashboard' ,
    component:DashboardComponent
  },

  {
    path:'departments',
    component:DepatementComponent
  },

  {
    path:'professors',
    component:ProfsComponent
  },

  {
    path:'subjects',
    component:SubjectsComponent
  },

  {
    path:'students',
    component:StudentsComponent
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
    path:'ProfessorsRoles',
    component:RolesListComponent
  },
  {
    path:'AdminsList',
    component:AdminListComponent
  },
  {
    path:'ProfessorsList',
    component:ProfessorListComponent
  },
  {
    path:'ExamsList',
    component:ExamsListComponent
  },

]
  },

  {
    path:'professor',
    component:DefaultProfComponent,
    canActivate:[ProfessorGuard],
    children:[
  {
    path:'exams',
    component:ExamsComponent
  },
  {
    path:'subjects',
    component:SubjectListComponent
  },
  {
    path:'SubjectsExams',
    component:SubjectExamsListComponent
  },
  {
    path:'SubjectsStudnets',
    component:SubjectStudentsListComponent
  },
  {
    path:'SubjectsChapters',
    component:SubjectChaptersListComponent
  },
  {
    path:'SubjectsDashBoard',
    component:SubjectComponent
  },
  {
    path:'chaptersQuestionslist',
    component:ChaptersQuestionsComponent
  },
  {
    path:'chaptersQuestionslistMCQ',
    component:ChaptersQuestionsMcqComponent
  },
  {
    path:'chaptersQuestionslistTorF',
    component:ChaptersQuestionsTorFComponent
  },
  {
    path:'CreateNewExam',
    component:CreateNewExamComponent
  },
  {
    path:'StudentsResult',
    component:StudentsResultsComponent
  },
  {
    path:'ExamsResult',
    component:ExamsResultComponent
  },
]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
