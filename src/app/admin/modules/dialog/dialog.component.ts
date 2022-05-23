import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { HttpClient } from '@angular/common/http';
import { Departments } from 'src/app/Models/Departments';
import { StudentsModel } from 'src/app/Models/StudentsModel';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})


export class DialogComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  students:StudentsModel;
  message:string;
  errorMsg:any;
  departments:Departments[];

  constructor(
    private service:AdminService,
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
    ) {
  }
  studentForm:FormGroup;
  ngOnInit(): void {

    this.departments=[];
    this.GetDepartments();
    this.students = {
      student_code:'',
      first_name: '',
      last_name: '',
      level:'',
      email:'',
      password: '',
      department_id:0,
    };

    this.studentForm=this.fb.group({
      student_code:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['',Validators.required],
      level:[''],
      password:['',Validators.required],
      department_id:[0,Validators.required],

    })

  }

  displayedColumns: string[]=['id', 'student_code'  , 'first_name' , 'last_name' , 'level' , 'email' ,'department_id' ,'password' , "action"]



  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  GetDepartments(){
    this.service.GetDepartments().subscribe(subs=>{
      this.departments=subs;
    },ex=>console.log('No departments Found'));
  }

  validateRegisterModel() {
    this.students.first_name=this.studentForm.value.first_name;
    this.students.last_name=this.studentForm.value.last_name;
    this.students.email=this.studentForm.value.email;
    this.students.student_code=this.studentForm.value.student_code;
    this.students.level=this.studentForm.value.level;
    this.students.password=this.studentForm.value.password;
    this.students.department_id=this.studentForm.value.department_id;
  }

  AddStudent(){
    this.validateRegisterModel();
    this.service.AddNewStudent(this.students).subscribe(list=>{
      this.message="Added Student Sucessfully";
      this.route.navigate(['/admin/students']).then(x=>{window.location.reload();});
    },ex=>{
      this.errorMsg="please fill all fields correctly"

    });

  }

}
