import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Departments } from 'src/app/Models/Departments';
import { Students } from 'src/app/Models/Students';
import { StudentsModel } from 'src/app/Models/StudentsModel';
import { AdminService } from 'src/app/services/admin.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id:number;
  student_code?:string;
  first_name?:string;
  last_name?:string;
  email?:string;
  level?:string;
  department_id?:number;
  password?:string;
}

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})

export class DialogEditComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  students=new StudentsModel();
  message:string;
  errorMsg:string;
  departments:Departments[];
  info:any;
  id:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:AdminService,
    private http:HttpClient,
    private fb:FormBuilder,
    private activateRoute:ActivatedRoute,
  ) { }
  studentForm:FormGroup;

  ngOnInit(): void {

    this.id=this.data.StudentId;
    console.log(this.id+' of the student');
    this.departments=[];
    this.studentForm=this.fb.group({
      student_code:[''],
      first_name:[''],
      last_name:[''],
      email:[''],
      level:[''],
      password:[''],
      department_id:[0],

    })
    this.GetDepartments();
    this.GetStudent();


  }

 // dataSource = new MatTableDataSource<PeriodicElement>(this.students);
  displayedColumns: string[]=['id', 'student_code'  , 'first_name' , 'last_name' , 'level' , 'email' ,'password' , "action"]

  GetDepartments(){
    this.service.GetDepartments().subscribe(subs=>{
      this.departments=subs;
    },ex=>console.log(ex));
  }

  GetStudent(){
    this.service.GetStudent(this.data.id).subscribe(res=>{
      this.info=res;
      this.students=this.info;
    })

  }

  EditStudent(){
    this.service.EditStudent(this.students,this.id).subscribe(success=>{
    this.message="Updated StudentSucessfully";
  },ex=>{
    console.log(ex);
  })
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }



}
