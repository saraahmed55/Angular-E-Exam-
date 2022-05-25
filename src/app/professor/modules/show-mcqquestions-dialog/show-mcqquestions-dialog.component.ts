import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfessorService } from 'src/app/services/professor.service';
import { Mcqs } from 'src/app/Models/Mcqs';
import { EditMCQ } from 'src/app/Models/EditMCQ';
import { DeficultyEnum } from 'src/app/Models/DeficultyEnum';
import { CorrectMcqEnum } from 'src/app/Models/CorrectMcqEnum';

export interface PeriodicElement {
  difficulty:DeficultyEnum;
  question_text:string;
  answer1:String;
  answer2:String;
  answer3:String;
  answer4:String;
  garde:any;
  CorrectAnswer:CorrectMcqEnum;
}

@Component({
  selector: 'app-show-mcqquestions-dialog',
  templateUrl: './show-mcqquestions-dialog.component.html',
  styleUrls: ['./show-mcqquestions-dialog.component.css']
})
export class ShowMCQQuestionsDialogComponent implements OnInit {

  DeficultyEnum = DeficultyEnum;
  CorrectMcqEnum=CorrectMcqEnum;
  hide = true;
  Data:any;
  isEditMode:boolean;
  code:any;
  id:any;
  mcqs:Mcqs;
  editData:EditMCQ;
  prof_code:any;
  subject_id:any;
  chapter_id:any;

  Deficultykeys= Object.keys(this.DeficultyEnum).filter((v) => isNaN(Number(v)));
  CorrectMcqkeys=Object.keys(this.CorrectMcqEnum).filter((v) => isNaN(Number(v)));

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:ProfessorService,
    private fb:FormBuilder,
  ) { }

   mcqsForm:FormGroup;
  ngOnInit(): void {
    this.prof_code=localStorage.getItem("prof_code")
    this.subject_id=localStorage.getItem("id")
    this.chapter_id=localStorage.getItem("chapter_id")
    this.id=this.data.Id;

    this.mcqsForm=this.fb.group({
      difficulty:[''],
      question_text:[''],
      answer1:[''],
      answer2:[''],
      answer3:[''],
      answer4:[''],
      grade:[''],
      CorrectAnswer:[''],
    });
    this.editData={
      difficulty:this.DeficultyEnum.easy,
      question_text:'',
      answer1:'',
      answer2:'',
      answer3:'',
      answer4:'',
      grade:'',
      CorrectAnswer:this.CorrectMcqEnum.answer1,
    }
    this.service.GetMCQ(this.prof_code,this.subject_id,this.chapter_id,this.id).subscribe(x=>{
      this.Data=x;
      this.isEditMode=true;
      this.AddData();
      },ex=>console.log(ex));
  }

  AddData() {
    if(this.Data!==null){
    this.mcqsForm.patchValue({
      difficulty:this.Data.difficulty,
      question_text:this.Data.question_text,
      answer1:this.Data.answer1,
      answer2:this.Data.answer2,
      answer3:this.Data.answer3,
      answer4:this.Data.answer4,
      grade:this.Data.grade,
      CorrectAnswer:this.Data.CorrectAnswer,
    })
   }
  }

}
