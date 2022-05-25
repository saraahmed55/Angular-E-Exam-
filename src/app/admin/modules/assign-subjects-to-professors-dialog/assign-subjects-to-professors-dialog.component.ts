import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Departments } from 'src/app/Models/Departments';
import { levelSubjects } from 'src/app/Models/levelSubjects';
import { Subjects } from 'src/app/Models/Subjects';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-assign-subjects-to-professors-dialog',
  templateUrl: './assign-subjects-to-professors-dialog.component.html',
  styleUrls: ['./assign-subjects-to-professors-dialog.component.css']
})
export class AssignSubjectsToProfessorsDialogComponent implements OnInit {

  hide = true;
  levelSubjects:levelSubjects
  departments:Departments[] 
  subjects:Subjects[]
  message:string;
  errorMsg:string;
  id:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:AdminService,
    private route: Router,
    private fb:FormBuilder,
  ) {}


  subjectsForm:FormGroup;
  ngOnInit(): void {
    this.id=this.data.Id;
    this.departments=[]
    this.subjects=[]
    this.GetDepartments()
    this.GetAllSubjects()
    this.levelSubjects = {
      department_id:'',
      subject_id:'',
      professor_id:'',
      level:'',
    };

    this.subjectsForm=this.fb.group({
      level:['',Validators.required],
      department_id:['',Validators.required],
      subject_id:['',Validators.required],
      professor_id:['',Validators.required],
    })
  }

  displayedColumns: string[]=['id', 'level'  , 'department_id' , 'subject_id' ,  'professor_id']

   GetDepartments() {
    this.service.GetDepartments().subscribe(subs=>{
      this.departments=subs;
    },ex=>this.errorMsg = 'No Departments Found');
  }

  GetAllSubjects(){
    this.service.GetAllSubjects().subscribe(subs=>{
      this.subjects=subs;
    },ex=>this.errorMsg = 'No Subjects Found');
  }
  validateRegisterModel() {
    this.levelSubjects.level=this.subjectsForm.value.level;
    this.levelSubjects.department_id=this.subjectsForm.value.department_id;
    this.levelSubjects.subject_id=this.subjectsForm.value.subject_id;
    this.levelSubjects.professor_id=this.id;
  }
  AssignSubjects(){
    this.validateRegisterModel();
      this.service.AddSubjectToProfessor(this.levelSubjects).subscribe(success=>{
        this.message="Added Subject to Professor Sucessfully";
        this.route.navigate(['/admin/professors']).then(x=>{window.location.reload();});
      },ex=>this.errorMsg='Can Not Add the Subject');
    }


}
