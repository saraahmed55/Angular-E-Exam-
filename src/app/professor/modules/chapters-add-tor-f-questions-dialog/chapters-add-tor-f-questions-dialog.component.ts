import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/app/services/professor.service';
import { TrueOrFalse } from 'src/app/Models/TrueOrFalse';
import { DeficultyEnum } from 'src/app/Models/DeficultyEnum';
import { CorrectTorFEnum } from 'src/app/Models/CorrectTorFEnum';
import { AddTorF } from 'src/app/Models/AddTorF';

@Component({
  selector: 'app-chapters-add-tor-f-questions-dialog',
  templateUrl: './chapters-add-tor-f-questions-dialog.component.html',
  styleUrls: ['./chapters-add-tor-f-questions-dialog.component.css']
})
export class ChaptersAddTorFQuestionsDialogComponent implements OnInit {

  DeficultyEnum = DeficultyEnum;
  CorrectTorFEnum=CorrectTorFEnum;
  hide = true;
  Data:any;
  message:string;
  errorMsg:string;
  code:any;
  id:any;
  TorF:TrueOrFalse;
  addData:AddTorF;
  prof_code:any;
  subject_id:any;
  chapter_id:any;


  Deficultykeys= Object.keys(this.DeficultyEnum).filter((v) => isNaN(Number(v)));
  CorrectTorFkeys=Object.keys(this.CorrectTorFEnum).filter((v) => isNaN(Number(v)));

  constructor(
    private service:ProfessorService,
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
  ) { }

  TorFForm:FormGroup;
  ngOnInit(): void {

    this.prof_code=localStorage.getItem("prof_code")
    this.subject_id=localStorage.getItem("id")
    this.chapter_id=localStorage.getItem("chapter_id")

    this.TorFForm=this.fb.group({
      difficulty:[''],
      question_text:[''],
      CorrectAnswer:[''],
    });
    this.addData={
      chapters_id:0,
      difficulty:this.DeficultyEnum.easy,
      question_text:'',
      CorrectAnswer:this.CorrectTorFEnum.true,
    }

  }


  validateRegisterModel() {
    this.addData.chapters_id=this.chapter_id;
    this.addData.difficulty=this.TorFForm.value.difficulty;
    this.addData.question_text=this.TorFForm.value.question_text;
    this.addData.CorrectAnswer=this.TorFForm.value.CorrectAnswer;

  }

  AddQuestion(){
    this.validateRegisterModel();
    this.service.AddNewTorF(this.addData,this.prof_code,this.subject_id,this.chapter_id).subscribe(list=>{
      this.ngOnInit();
      this.message="Added Question Sucessfully";
      this.route.navigate(['chaptersQuestionslistTorF']).then(x=>{window.location.reload();});
    },ex=>{
      this.errorMsg="please fill all fields correctly"

    });

  }

}
