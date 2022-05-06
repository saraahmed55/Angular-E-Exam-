import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/app/services/professor.service';
import { Mcqs } from 'src/app/Models/Mcqs';
import { DeficultyEnum } from 'src/app/Models/DeficultyEnum';
import { CorrectMcqEnum } from 'src/app/Models/CorrectMcqEnum';

@Component({
  selector: 'app-chapters-add-mcq-questions-dialog',
  templateUrl: './chapters-add-mcq-questions-dialog.component.html',
  styleUrls: ['./chapters-add-mcq-questions-dialog.component.css']
})
export class ChaptersAddMcqQuestionsDialogComponent implements OnInit {
  DeficultyEnum=DeficultyEnum;
  CorrectMcqEnum=CorrectMcqEnum;
  hide = true;
  mcqs:Mcqs;
  message:string;
  errorMsg:any;
  prof_code:any;
  subject_id:any;
  chapter_id:any;

  Deficultykeys= Object.keys(this.DeficultyEnum).filter((v) => isNaN(Number(v)));
  CorrectMcqkeys=Object.keys(this.CorrectMcqEnum).filter((v) => isNaN(Number(v)));

  constructor(
    private service:ProfessorService,
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
  ) {}

  mcqForm:FormGroup;
  ngOnInit(): void {

    this.mcqs = {
      id:'',
      chapter_id:0,
      difficulty:this.DeficultyEnum.easy,
      question_text: '',
      answer1:'',
      answer2:'',
      answer3:'',
      answer4:'',
      CorrectAnswer:this.CorrectMcqEnum.answer1,
    };
    this.mcqForm=this.fb.group({
      difficulty:[''],
      question_text:['',Validators.required],
      answer1:['',Validators.required],
      answer2:['',Validators.required],
      answer3:['',Validators.required],
      answer4:['',Validators.required],
      CorrectAnswer:[''],

    })

  }

  displayedColumns: string[]=['id', 'chapter_id' ,'difficulty' ,'question_text' ,'answer1' , 'answer2' ,'answer3' ,'answer4','CorrectAnswer' ,"action" ]

  validateRegisterModel() {
    this.mcqs.chapter_id=this.chapter_id;
    this.mcqs.difficulty=this.mcqForm.value.difficulty;
    this.mcqs.question_text=this.mcqForm.value.question_text;
    this.mcqs.answer1=this.mcqForm.value.answer1;
    this.mcqs.answer2=this.mcqForm.value.answer2;
    this.mcqs.answer3=this.mcqForm.value.answer3;
    this.mcqs.answer4=this.mcqForm.value.answer4;
    this.mcqs.CorrectAnswer=this.mcqForm.value.CorrectAnswer;
    console.log(this.mcqs.chapter_id)
    console.log(this.mcqs.CorrectAnswer)

  }

  AddMCQQuestion(){
    this.prof_code=localStorage.getItem("prof_code")
    this.subject_id=localStorage.getItem("id")
    this.chapter_id=localStorage.getItem("chapter_id")
    this.validateRegisterModel();
    this.service.AddMCQQuestion(this.mcqs,this.prof_code,this.subject_id,this.chapter_id).subscribe(list=>{
      this.ngOnInit();
      this.message="Added Question Sucessfully";
     // this.route.navigate(['chaptersQuestionslistMCQ']).then(x=>{window.location.reload();});
    },ex=>{
      this.errorMsg="please fill all fields correctly"

    });

  }



}
