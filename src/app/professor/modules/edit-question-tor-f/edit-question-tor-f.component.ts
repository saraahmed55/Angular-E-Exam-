import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfessorService } from 'src/app/services/professor.service';
import { DeficultyEnum } from 'src/app/Models/DeficultyEnum';
import { CorrectTorFEnum } from 'src/app/Models/CorrectTorFEnum';
import { TrueOrFalse } from 'src/app/Models/TrueOrFalse';
import { EditTorF } from 'src/app/Models/EditTorF';

export interface PeriodicElement {
  difficulty:DeficultyEnum;
  question_text:string;
  CorrectAnswer:CorrectTorFEnum;
}

@Component({
  selector: 'app-edit-question-tor-f',
  templateUrl: './edit-question-tor-f.component.html',
  styleUrls: ['./edit-question-tor-f.component.css']
})
export class EditQuestionTorFComponent implements OnInit {

  DeficultyEnum = DeficultyEnum;
  CorrectTorFEnum=CorrectTorFEnum;
  hide = true;
  Data:any;
  message:string;
  errorMsg:string;
  isEditMode:boolean;
  code:any;
  id:any;
  TorF:TrueOrFalse;
  editData:EditTorF;
  prof_code:any;
  subject_id:any;
  chapter_id:any;


  Deficultykeys= Object.keys(this.DeficultyEnum).filter((v) => isNaN(Number(v)));
  CorrectTorFkeys=Object.keys(this.CorrectTorFEnum).filter((v) => isNaN(Number(v)));

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:ProfessorService,
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
  ) {}

  TorFForm:FormGroup;
  ngOnInit(): void {
    this.prof_code=localStorage.getItem("prof_code")
    this.subject_id=localStorage.getItem("id")
    this.chapter_id=localStorage.getItem("chapter_id")
    this.id=this.data.Id;

    this.TorFForm=this.fb.group({
      difficulty:[''],
      question_text:[''],
      CorrectAnswer:[''],
    });
    this.editData={
      difficulty:this.DeficultyEnum.easy,
      question_text:'',
      CorrectAnswer:this.CorrectTorFEnum.true,
    }
    this.service.GetTorF(this.prof_code,this.subject_id,this.chapter_id,this.id).subscribe(x=>{
      this.Data=x;
      this.isEditMode=true;
      this.AddData();
      },ex=>console.log(ex));
  }


  AddData() {
    if(this.Data!==null){
    this.TorFForm.patchValue({
      difficulty:this.Data.difficulty,
      question_text:this.Data.question_text,
      CorrectAnswer:this.Data.CorrectAnswer,
    })
   }
  }


  AddChapter(){
    if(this.TorFForm.valid){
      this.editData.difficulty=this.TorFForm.value.difficulty;
      this.editData.question_text=this.TorFForm.value.question_text;
      this.editData.CorrectAnswer=this.TorFForm.value.CorrectAnswer;

      this.service.EditTorF(this.editData,this.prof_code,this.subject_id,this.chapter_id,this.id).subscribe(x=>{
        this.message="Information is Updated Succesfully";
        this.route.navigate(['professor/chaptersQuestionslistTorF']).then(x=>{window.location.reload();});
      },ex=>console.log(ex));
    }
  }


}
