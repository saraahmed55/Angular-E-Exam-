import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/app/services/professor.service';
import { Mcqs } from 'src/app/Models/Mcqs';
import { DeficultyEnum } from 'src/app/Models/DeficultyEnum';
import { CorrectMcqEnum } from 'src/app/Models/CorrectMcqEnum';
import { AddMCQs } from 'src/app/Models/AddMCQs';

export interface PeriodicElement {
  difficulty:DeficultyEnum;
  question_text:string;
  answer1:String;
  answer2:String;
  answer3:String;
  answer4:String;
  CorrectAnswer:CorrectMcqEnum;
}

@Component({
  selector: 'app-chapters-add-mcq-questions-dialog',
  templateUrl: './chapters-add-mcq-questions-dialog.component.html',
  styleUrls: ['./chapters-add-mcq-questions-dialog.component.css']
})
export class ChaptersAddMcqQuestionsDialogComponent implements OnInit {
  DeficultyEnum = DeficultyEnum;
  CorrectMcqEnum=CorrectMcqEnum;
  hide = true;
  Data:any;
  message:string;
  errorMsg:string;
  code:any;
  id:any;
  mcqs:Mcqs;
  addData:AddMCQs;
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

    this.prof_code=localStorage.getItem("prof_code")
    this.subject_id=localStorage.getItem("id")
    this.chapter_id=localStorage.getItem("chapter_id")

    this.addData = {
      chapters_id:0,
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
      question_text:[''],
      answer1:[''],
      answer2:[''],
      answer3:[''],
      answer4:[''],
      CorrectAnswer:[''],

    })

  }

  validateRegisterModel() {
    this.addData.chapters_id=this.chapter_id;
    this.addData.difficulty=this.mcqForm.value.difficulty;
    this.addData.question_text=this.mcqForm.value.question_text;
    this.addData.answer1=this.mcqForm.value.answer1;
    this.addData.answer2=this.mcqForm.value.answer2;
    this.addData.answer3=this.mcqForm.value.answer3;
    this.addData.answer4=this.mcqForm.value.answer4;
    this.addData.CorrectAnswer=this.mcqForm.value.CorrectAnswer;
  }

  AddMCQQuestion(){
    this.validateRegisterModel();
    this.service.AddMCQQuestion(this.addData,this.prof_code,this.subject_id,this.chapter_id).subscribe(list=>{
      this.message="Added Question Sucessfully";
     this.route.navigate(['professor/chaptersQuestionslistMCQ']).then(x=>{window.location.reload();});
    },ex=>{
      this.errorMsg="please fill all fields correctly"

    });

  }



}
