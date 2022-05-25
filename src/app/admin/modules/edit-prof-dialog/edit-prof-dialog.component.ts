import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { professors } from 'src/app/Models/professors';
import { EditProfessorModel } from 'src/app/Models/EditProfessorModel';
import { RolesModel } from 'src/app/Models/RolesModel';
import { EditProfessorInAdmin } from 'src/app/Models/EditProfessorInAdmin';
import { Departments } from 'src/app/Models/Departments';


export interface PeriodicElement {
  id:number;
  prof_code?:string;
  first_name?:string;
  last_name?:string;
  email?:string;
  password?:string;
  role_id:any;
}


@Component({
  selector: 'app-edit-prof-dialog',
  templateUrl: './edit-prof-dialog.component.html',
  styleUrls: ['./edit-prof-dialog.component.css']
})
export class EditProfDialogComponent implements OnInit {
  hide = true;
  userData:any;
  message:string;
  errorMsg:string;
  isEditMode:boolean;
  email = new FormControl('', [Validators.required, Validators.email]);
  code:any;
  id:any;
  roles:RolesModel[];
  professors:professors;
  editUserData:EditProfessorInAdmin;
  departments:Departments[]

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:AdminService,
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
  ) { }

  professorForm:FormGroup;
  ngOnInit(): void {

    this.id=this.data.Id;
    this.roles=[];
    this.departments=[]
    this.GetDepartments()
    this.professorForm=this.fb.group({
      prof_code:[''],
      first_name:[''],
      last_name:[''],
      email:[''],
      password:[''],
      department_id:[''],
      roles_id:[0],

    });
    this.editUserData={
      first_name: '',
      last_name: '',
      email: '',
      roles_id: '',
      prof_code: '',
      department_id:'',
      password: '',
    }
    this.GetRoles();

    this.service.GetProfessor(this.id).subscribe(x=>{
      this.userData=x;
      this.isEditMode=true;
      this.AddUserData();
      },ex=>console.log(ex));
  }

  displayedColumns: string[]=['id', 'prof_code'  , 'first_name' , 'last_name' ,  'email' ,'password' ,'department_id','roles_id', "action"]

  AddUserData() {
    if(this.userData!==null){
    this.professorForm.patchValue({
      prof_code:this.userData.prof_code,
      password:this.userData.password,
      first_name:this.userData.first_name,
      last_name:this.userData.last_name,
      email:this.userData.email,
      roles_id:this.userData.roles_id,
      department_id:this.userData.department_id,
    })
   }
  }

  GetDepartments() {
    this.service.GetDepartments().subscribe(subs=>{
      this.departments=subs;
    },ex=>this.errorMsg = 'No Departments Found');
  }
  AddUser(){
    if(this.professorForm.valid){
      this.editUserData.first_name=this.professorForm.value.first_name;
      this.editUserData.last_name=this.professorForm.value.last_name;
      this.editUserData.email=this.professorForm.value.email;
      this.editUserData.roles_id=this.professorForm.value.roles_id;
      this.editUserData.prof_code=this.professorForm.value.prof_code;
      this.editUserData.password=this.professorForm.value.password;
      this.editUserData.department_id=this.professorForm.value.department_id;

      this.service.EditProfessor(this.editUserData,this.id).subscribe(x=>{
        this.message="Information is Updated Succesfully";
        this.route.navigate(['/admin/professors']).then(x=>{window.location.reload();});
      },ex=>console.log(ex));
    }
  }

  GetRoles(){
    this.service.GetRoles().subscribe(subs=>{
      this.roles=subs;
    },ex=>console.log('No Roles Found'));
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}
