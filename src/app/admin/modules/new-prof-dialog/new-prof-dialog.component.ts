import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators,FormBuilder} from '@angular/forms';
import { ProfessorsModel } from 'src/app/Models/ProfessorsModel';
import { AdminService } from 'src/app/services/admin.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';





@Component({
  selector: 'app-new-prof-dialog',
  templateUrl: './new-prof-dialog.component.html',
  styleUrls: ['./new-prof-dialog.component.css']
})
export class NewProfDialogComponent implements OnInit {
  hide = true;


  email = new FormControl('', [Validators.required, Validators.email]);
  professor:ProfessorsModel;
  message:string;
  errorMsg:string;

  constructor(
    private service:AdminService,
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
  ) {}


  professorForm:FormGroup;
  ngOnInit(): void {

    this.professor = {
      id:0,
      prof_code:'',
      first_name: '',
      last_name: '',
      email:'',
      password: '',
    };

    this.professorForm=this.fb.group({

      prof_code:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }

  displayedColumns: string[]=['id', 'prof_code'  , 'first_name' , 'last_name' ,  'email' ,'password' , "action"]


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  validateRegisterModel() {
    this.professor.first_name=this.professorForm.value.first_name;
    this.professor.last_name=this.professorForm.value.last_name;
    this.professor.email=this.professorForm.value.email;
    this.professor.prof_code=this.professorForm.value.prof_code;
    this.professor.password=this.professorForm.value.password;

}



  AddProfessor(){
    this.validateRegisterModel();
    console.log(this.professor);
    this.service.AddNewProfessor(this.professor).subscribe(list=>{
      this.ngOnInit();
      this.message="Added Professor Sucessfully";
      this.route.navigate(['professors']).then(x=>{window.location.reload();});
    },ex=>this.errorMsg='please, fill all fields correctly');

   };



}
