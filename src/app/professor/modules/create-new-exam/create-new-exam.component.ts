import { Component, Inject,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subjects } from 'src/app/Models/Subjects';
import { ProfessorService } from 'src/app/services/professor.service';
import { QuestionBankExamChaptersComponent } from '../question-bank-exam-chapters/question-bank-exam-chapters.component';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CreateExam } from 'src/app/Models/CreateExam';
import { Exams } from 'src/app/Models/Exams';
import { DatePipe } from '@angular/common'

export interface PeriodicElement {
  subject_id:any;
  start_time:any;
  end_time:any;
  duration_minutes:any;
  mcq_easy_questionsNumber:any;
  mcq_medium_questionsNumber:any;
  mcq_hard_questions:any;
  tf_easy_questionsNumber:any;
  tf_medium_questionsNumber:any;
  tf_hard_questionsNumber:any;
}

@Component({
  selector: 'app-create-new-exam',
  templateUrl: './create-new-exam.component.html',
  styleUrls: ['./create-new-exam.component.css']
})
export class CreateNewExamComponent implements OnInit {

  minDate=new Date();
  maxDate=new Date(2023,7,15);
  prof_code:any;
  subjectName:Subjects[];
  subject_id:any;
  studentCount:any;
  addData:CreateExam;
  exam:Exams;
  hide = true;
  Data:any;
  message:string;
  errorMsg:string;
  code:any;
  id:any;
 date: Date;
 latest_date: any;

  constructor(
    public dialog: MatDialog,
    private service:ProfessorService,
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
    public datepipe: DatePipe
  ) {

    this.date=new Date();
    this.latest_date =this.datepipe.transform(this.date, 'yyyy-MM-ddTHH-mm');
   }


  examForm:FormGroup;
  ngOnInit(): void {
    this.prof_code=localStorage.getItem("prof_code")
    this.subject_id=localStorage.getItem("id")
    this.getsubjectName(this.prof_code,this.subject_id)
    console.log(this.latest_date)

    this.addData = {
      subject_id:0,
      start_time:'',
      end_time:'',
      duration_minutes:'',
      mcq_easy_questionsNumber:'',
      mcq_medium_questionsNumber:'',
      mcq_hard_questions:'',
      tf_easy_questionsNumber:'',
      tf_medium_questionsNumber:'',
      tf_hard_questionsNumber:'',
    };

    this.examForm=this.fb.group({
      start_time:[''],
      end_time:[''],
      duration_minutes:[''],
      mcq_easy_questionsNumber:[''],
      mcq_medium_questionsNumber:[''],
      mcq_hard_questions:[''],
      tf_easy_questionsNumber:[''],
      tf_medium_questionsNumber:[''],
      tf_hard_questionsNumber:[''],

    })
  }

  validateRegisterModel() {
    this.addData.subject_id=this.subject_id;
    this.addData.start_time=this.examForm.value.start_time;
    this.addData.end_time=this.examForm.value.end_time;
    this.addData.duration_minutes=this.examForm.value.duration_minutes;
    this.addData.mcq_easy_questionsNumber=this.examForm.value.mcq_easy_questionsNumber;
    this.addData.mcq_medium_questionsNumber=this.examForm.value.mcq_medium_questionsNumber;
    this.addData.mcq_hard_questions=this.examForm.value.mcq_hard_questions;
    this.addData.tf_easy_questionsNumber=this.examForm.value.tf_easy_questionsNumber;
    this.addData.tf_medium_questionsNumber=this.examForm.value.tf_medium_questionsNumber;
    this.addData.tf_hard_questionsNumber=this.examForm.value.tf_hard_questionsNumber;
  }

  CreateExam(){
    this.validateRegisterModel();
    this.service.CreateExam(this.addData,this.prof_code,this.subject_id).subscribe(list=>{
      this.ngOnInit();
      this.message="Posted Sucessfully";
     this.route.navigate(['chaptersQuestionslistMCQ']).then(x=>{window.location.reload();});
    },ex=>{
      this.errorMsg="please fill all fields correctly"
    });
  }

  getsubjectName(prof_code:any,subject_id:any){
    this.service.getsubjectName(prof_code,subject_id).subscribe(list=>{
      this.subjectName=list;
   });
  }

  openChaptersDialog() {
    const dialogRef = this.dialog.open(QuestionBankExamChaptersComponent, { width:'78%' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
