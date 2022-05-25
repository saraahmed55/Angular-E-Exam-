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
  CorrectAnswer:CorrectMcqEnum;
}

@Component({
  selector: 'app-edit-question-mcq',
  templateUrl: './edit-question-mcq.component.html',
  styleUrls: ['./edit-question-mcq.component.css']
})
export class EditQuestionMcqComponent implements OnInit {

  DeficultyEnum = DeficultyEnum;
  CorrectMcqEnum=CorrectMcqEnum;
  hide = true;
  Data:any;
  message:string;
  errorMsg:string;
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
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
  ) {}

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


  AddChapter(){
    if(this.mcqsForm.valid){
      this.editData.difficulty=this.mcqsForm.value.difficulty;
      this.editData.question_text=this.mcqsForm.value.question_text;
      this.editData.answer1=this.mcqsForm.value.answer1;
      this.editData.answer2=this.mcqsForm.value.answer2;
      this.editData.answer3=this.mcqsForm.value.answer3;
      this.editData.answer4=this.mcqsForm.value.answer4;
      this.editData.grade=this.mcqsForm.value.grade;
      this.editData.CorrectAnswer=this.mcqsForm.value.CorrectAnswer;

      this.service.EditMcq(this.editData,this.prof_code,this.subject_id,this.chapter_id,this.id).subscribe(x=>{
        this.message="Information is Updated Succesfully";
        this.route.navigate(['professor/chaptersQuestionslistMCQ']).then(x=>{window.location.reload();});
      },ex=>console.log(ex));
    }
  }

}
