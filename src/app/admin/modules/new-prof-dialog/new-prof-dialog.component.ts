import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators,FormBuilder} from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Departments } from 'src/app/Models/Departments';
import { AddProfessorInAdmin } from 'src/app/Models/AddProfessorInAdmin';

@Component({
  selector: 'app-new-prof-dialog',
  templateUrl: './new-prof-dialog.component.html',
  styleUrls: ['./new-prof-dialog.component.css']
})
export class NewProfDialogComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  professor:AddProfessorInAdmin;
  message:string;
  errorMsg:string;
  departments:Departments[]

  constructor(
    private service:AdminService,
    private route: Router,
    private fb:FormBuilder,
  ) {}


  professorForm:FormGroup;
  ngOnInit(): void {
    this.departments=[]
    this.GetDepartments()
    this.professor = {
      id:0,
      prof_code:'',
      first_name: '',
      last_name: '',
      department_id:'',
      email:'',
      password: '',
    };

    this.professorForm=this.fb.group({
      prof_code:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['',Validators.required],
      department_id:['',Validators.required],
      password:['',Validators.required],
    })
  }

  displayedColumns: string[]=['id', 'prof_code'  , 'first_name' , 'last_name' ,'department_id',  'email' ,'password' , "action"]


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  GetDepartments() {
    this.service.GetDepartments().subscribe(subs=>{
      this.departments=subs;
    },ex=>this.errorMsg = 'No Departments Found');
  }
  validateRegisterModel() {
    this.professor.first_name=this.professorForm.value.first_name;
    this.professor.last_name=this.professorForm.value.last_name;
    this.professor.email=this.professorForm.value.email;
    this.professor.department_id=this.professorForm.value.department_id;
    this.professor.prof_code=this.professorForm.value.prof_code;
    this.professor.password=this.professorForm.value.password;
  }

  AddProfessor(){
    this.validateRegisterModel();
    console.log(this.professor);
    this.service.AddNewProfessor(this.professor).subscribe(list=>{
      this.message="Added Professor Sucessfully";
      this.route.navigate(['/admin/professors']).then(x=>{window.location.reload();});
    },ex=>this.errorMsg='please, fill all fields correctly');

   };

}
