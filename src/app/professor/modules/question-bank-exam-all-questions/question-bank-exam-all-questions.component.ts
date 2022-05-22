import { Component, OnInit , ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from 'src/app/services/professor.service';
import { AuthService } from 'src/app/services/auth.service';
import { Mcqs } from 'src/app/Models/Mcqs';
import { DeficultyEnum } from 'src/app/Models/DeficultyEnum';
import { CorrectMcqEnum } from 'src/app/Models/CorrectMcqEnum';
import { CorrectTorFEnum } from 'src/app/Models/CorrectTorFEnum';
import { TrueOrFalse } from 'src/app/Models/TrueOrFalse';


@Component({
  selector: 'app-question-bank-exam-all-questions',
  templateUrl: './question-bank-exam-all-questions.component.html',
  styleUrls: ['./question-bank-exam-all-questions.component.css']
})
export class QuestionBankExamAllQuestionsComponent implements OnInit {

  mcqs:Mcqs[]=[];
  TF:TrueOrFalse[]=[];
  prof_code:any;
  subject_id:any;
  chapter_id:any;

  mcqdisplayedColumns: string[]=['mcq_id' ,'difficulty' ,'question_text' ,'answer1' , 'answer2' ,'answer3' ,'answer4','CorrectAnswer' ,"action" ]
  mcqsDataSource: MatTableDataSource<Mcqs>;

  TFdisplayedColumns: string[]=['tf_id' ,'difficulty' ,'question_text' ,'CorrectAnswer' ,"action" ]
  TFDataSource: MatTableDataSource<TrueOrFalse>;

  @ViewChild('mcqspaginator',{ static: true }) mcqspaginator!: MatPaginator;
  @ViewChild('TFpaginator',{ static: true }) TFpaginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.TFDataSource.filter = filterValue.trim().toLowerCase();
    this.mcqsDataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public dialog: MatDialog,
    private http:HttpClient,
    private route: Router,
    private service:ProfessorService,
  ) { }

  ngOnInit(): void {
    this.prof_code=localStorage.getItem("prof_code")
    this.subject_id=localStorage.getItem("id")
    this.chapter_id=localStorage.getItem("chapter_id")
    this.getChapterMCQ(this.prof_code,this.subject_id,this.chapter_id)
    this.getChapterTF(this.prof_code,this.subject_id,this.chapter_id)
  }

  getChapterMCQ(profcode:any,subjectid:any,chapterid:any) {
    this.service.getChapterMCQ(profcode,subjectid,chapterid).subscribe(list=>{
      this.mcqs=list;
      this.mcqsDataSource = new MatTableDataSource(this.mcqs);
      this.mcqsDataSource.paginator = this.mcqspaginator;
   });
  }

  getChapterTF(profcode:any,subjectid:any,chapterid:any) {
    this.service.getChapterTF(profcode,subjectid,chapterid).subscribe(list=>{
      this.TF=list;
      this.TFDataSource = new MatTableDataSource(this.TF);
      this.TFDataSource.paginator = this.TFpaginator;
   });
  }

  addQuestion(question_id:any){

  }

}
