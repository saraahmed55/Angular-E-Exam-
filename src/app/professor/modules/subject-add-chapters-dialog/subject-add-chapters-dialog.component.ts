import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Chapters } from 'src/app/Models/Chapters';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-subject-add-chapters-dialog',
  templateUrl: './subject-add-chapters-dialog.component.html',
  styleUrls: ['./subject-add-chapters-dialog.component.css']
})
export class SubjectAddChaptersDialogComponent implements OnInit {

  hide = true;
  chapters:Chapters;
  message:string;
  errorMsg:any;
  prof_code:any;
  id:any;

  constructor(
    private service:ProfessorService,
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
  ) { }

  chapterForm:FormGroup;
  ngOnInit(): void {

    this.chapters = {
      chapter_id:0,
      chapter_number: '',
      chapter_name: '',
      subject_id:'',
    };
    this.chapterForm=this.fb.group({
      chapter_number:['',Validators.required],
      chapter_name:['',Validators.required],
    })
  }

  displayedColumns: string[]=['id', 'chapter_number'  , 'chapter_name' , "action"]

  validateRegisterModel() {
    this.chapters.chapter_number=this.chapterForm.value.chapter_number;
    this.chapters.chapter_name=this.chapterForm.value.chapter_name;
    this.chapters.subject_id=this.id;
  }

  AddChapter(){
    this.prof_code=localStorage.getItem("prof_code")
    this.id=localStorage.getItem("id")
    this.validateRegisterModel();
    this.service.AddNewChapter(this.chapters,this.prof_code,this.id).subscribe(list=>{
      this.ngOnInit();
      this.message="Added chapter Sucessfully";
      this.route.navigate(['professorSubjectsChapters']).then(x=>{window.location.reload();});
    },ex=>{
      this.errorMsg="please fill all fields correctly"

    });

  }

}
