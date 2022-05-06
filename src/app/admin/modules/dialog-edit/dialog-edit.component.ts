import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departments } from 'src/app/Models/Departments';
import { Students } from 'src/app/Models/Students';
import { AdminService } from 'src/app/services/admin.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditStudentModel } from 'src/app/Models/EditStudentModel';

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
  userData:any;
  message:string;
  errorMsg:string;
  isEditMode:boolean;
  departments:Departments[];
  info:any;
  code:any;
  id:any;
  student_code:string;
  password:string;
  first_name:string;
  last_name:string;
  level:string;
  department_id:string;

  student:Students;
  editUserData:EditStudentModel;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:AdminService,
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
  ) { }
  studentForm:FormGroup;

  ngOnInit(): void {

    this.id=this.data.Id;
    this.departments=[];
    this.studentForm=this.fb.group({
      student_code:[''],
      first_name:[''],
      last_name:[''],
      email:[''],
      level:[''],
      password:[''],
      department_id:[0],

    });
    this.editUserData={
      first_name: '',
      last_name: '',
      email: '',
      level: '',
      department_id: '',
      student_code: '',
      password: '',
    }
    this.GetDepartments();

    this.service.GetStudent(this.id).subscribe(x=>{
      this.userData=x;
      this.isEditMode=true;
      this.AddUserData();
      },ex=>console.log(ex));

  }

  displayedColumns: string[]=['id', 'student_code'  , 'first_name' , 'last_name' , 'level' , 'email' ,'password' , "action"]

  AddUserData() {
    if(this.userData!==null){
    this.studentForm.patchValue({
      student_code:this.userData.student_code,
      password:this.userData.password,
      first_name:this.userData.first_name,
      last_name:this.userData.last_name,
      email:this.userData.email,
      level:this.userData.level,
      department_id:this.userData.department_id,
    })
   }
  }


  AddUser(){
    if(this.studentForm.valid){
      this.editUserData.first_name=this.studentForm.value.first_name;
      this.editUserData.last_name=this.studentForm.value.last_name;
      this.editUserData.email=this.studentForm.value.email;
      this.editUserData.level=this.studentForm.value.level;
      this.editUserData.department_id=this.studentForm.value.department_id;
      this.editUserData.student_code=this.studentForm.value.student_code;
      this.editUserData.password=this.studentForm.value.password;

      this.service.EditStudent(this.editUserData,this.id).subscribe(x=>{
        this.message="Information is Updated Succesfully";
        this.route.navigate(['students']).then(x=>{window.location.reload();});
      },ex=>console.log(ex));
    }
  }

  GetDepartments(){
    this.service.GetDepartments().subscribe(subs=>{
      this.departments=subs;
    },ex=>console.log('No Departments Found'));
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }



}
