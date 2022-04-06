import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CorrectMcqEnum } from 'src/app/Models/CorrectMcqEnum';
import { DeficultyEnum } from 'src/app/Models/DeficultyEnum';
import { Mcqs } from 'src/app/Models/Mcqs';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-new-question-dialog',
  templateUrl: './new-question-dialog.component.html',
  styleUrls: ['./new-question-dialog.component.css']
})
export class NewQuestionDialogComponent implements OnInit {

  DeficultyEnum=DeficultyEnum;
  keys=[];

  mcq:Mcqs;
  message:string;
  errorMsg:string;

  constructor(
    private service:AdminService,
    private http:HttpClient,
    private fb:FormBuilder,
  ) { }

  studentForm:FormGroup;
  ngOnInit(): void {

    };


  }


