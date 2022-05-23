import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultProfComponent } from './default-prof.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SubjectComponent } from '../../modules/subject/subject.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { InfoDialogComponent } from '../../modules/info-dialog/info-dialog.component';
import { CreateNewExamComponent } from '../../modules/create-new-exam/create-new-exam.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ExamsComponent } from '../../modules/exams/exams.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StudentsResultsComponent } from '../../modules/students-results/students-results.component';
import { SubjectListComponent } from '../../modules/subject-list/subject-list.component';
import { SubjectExamsListComponent } from '../../modules/subject-exams-list/subject-exams-list.component';
import { SubjectStudentsListComponent } from '../../modules/subject-students-list/subject-students-list.component';
import { SubjectChaptersListComponent } from '../../modules/subject-chapters-list/subject-chapters-list.component';
import { SubjectAddChaptersDialogComponent } from '../../modules/subject-add-chapters-dialog/subject-add-chapters-dialog.component';
import { ChaptersQuestionsComponent } from '../../modules/chapters-questions/chapters-questions.component';
import { ChaptersQuestionsMcqComponent } from '../../modules/chapters-questions-mcq/chapters-questions-mcq.component';
import { ChaptersQuestionsTorFComponent } from '../../modules/chapters-questions-tor-f/chapters-questions-tor-f.component';
import { ChaptersAddMcqQuestionsDialogComponent } from '../../modules/chapters-add-mcq-questions-dialog/chapters-add-mcq-questions-dialog.component';
import { ChaptersAddTorFQuestionsDialogComponent } from '../../modules/chapters-add-tor-f-questions-dialog/chapters-add-tor-f-questions-dialog.component';
import { EditChaptersDialogComponent } from '../../modules/edit-chapters-dialog/edit-chapters-dialog.component';
import { EditQuestionMcqComponent } from '../../modules/edit-question-mcq/edit-question-mcq.component';
import { EditQuestionTorFComponent } from '../../modules/edit-question-tor-f/edit-question-tor-f.component';
import { QuestionBankExamChaptersComponent } from '../../modules/question-bank-exam-chapters/question-bank-exam-chapters.component';
import { QuestionBankExamQuestionsComponent } from '../../modules/question-bank-exam-questions/question-bank-exam-questions.component';
import { QuestionBankExamAllQuestionsComponent } from '../../modules/question-bank-exam-all-questions/question-bank-exam-all-questions.component';
import { ExamsResultComponent } from '../../modules/exams-result/exams-result.component';
import { ExamsInformationDialogComponent } from '../../modules/exams-information-dialog/exams-information-dialog.component';
import { MainExamsInformationDialogComponent } from '../../modules/main-exams-information-dialog/main-exams-information-dialog.component';
import { ShowMCQQuestionsDialogComponent } from '../../modules/show-mcqquestions-dialog/show-mcqquestions-dialog.component';




@NgModule({
  declarations: [
    DefaultProfComponent,
    SubjectComponent,
    InfoDialogComponent,
    CreateNewExamComponent,
    ExamsComponent,
    StudentsResultsComponent,
    SubjectListComponent,
    SubjectExamsListComponent,
    SubjectStudentsListComponent,
    SubjectChaptersListComponent,
    SubjectAddChaptersDialogComponent,
    ChaptersQuestionsComponent,
    ChaptersQuestionsMcqComponent,
    ChaptersQuestionsTorFComponent,
    ChaptersAddMcqQuestionsDialogComponent,
    ChaptersAddTorFQuestionsDialogComponent,
    EditChaptersDialogComponent,
    EditQuestionMcqComponent,
    EditQuestionTorFComponent,
    QuestionBankExamChaptersComponent,
    QuestionBankExamQuestionsComponent,
    QuestionBankExamAllQuestionsComponent,
    ExamsResultComponent,
    ExamsInformationDialogComponent,
    MainExamsInformationDialogComponent,
    ShowMCQQuestionsDialogComponent,












  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,


  ]
})
export class DefaultProfModule { }
