import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Chapters } from 'src/app/Models/Chapters';
import { EditChaptersModel } from 'src/app/Models/EditChaptersModel';
import { ProfessorService } from 'src/app/services/professor.service';

export interface PeriodicElement {
  chapter_number:any;
  chapter_name:string;
}

@Component({
  selector: 'app-edit-chapters-dialog',
  templateUrl: './edit-chapters-dialog.component.html',
  styleUrls: ['./edit-chapters-dialog.component.css']
})
export class EditChaptersDialogComponent implements OnInit {
  hide = true;
  Data:any;
  message:string;
  errorMsg:string;
  isEditMode:boolean;
  code:any;
  id:any;
  chapter:Chapters;
  editData:EditChaptersModel;
  prof_code:any;
  subject_id:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:ProfessorService,
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
  ) { }

  chapterForm:FormGroup;
  ngOnInit(): void {
    this.prof_code=localStorage.getItem("prof_code")
    this.subject_id=localStorage.getItem("id")
    this.id=this.data.Id;

    this.chapterForm=this.fb.group({
      chapter_number:[''],
      chapter_name:[''],
    });
    this.editData={
      chapter_number:'',
      chapter_name: '',
    }
    this.service.Getchapter(this.prof_code,this.subject_id,this.id).subscribe(x=>{
      this.Data=x;
      this.isEditMode=true;
      this.AddData();
      },ex=>console.log(ex));
  }

  displayedColumns: string[]=['chapter_number', 'chapter_name' , "action"]

  AddData() {
    if(this.Data!==null){
    this.chapterForm.patchValue({
      chapter_number:this.Data.chapter_number,
      chapter_name:this.Data.chapter_name,
    })
   }
  }

  AddChapter(){
    if(this.chapterForm.valid){
      this.editData.chapter_number=this.chapterForm.value.chapter_number;
      this.editData.chapter_name=this.chapterForm.value.chapter_name;

      this.service.Editchapter(this.editData,this.prof_code,this.subject_id,this.id).subscribe(x=>{
        this.message="Information is Updated Succesfully";
        this.route.navigate(['professorSubjectsChapters']).then(x=>{window.location.reload();});
      },ex=>console.log(ex));
    }
  }
}
