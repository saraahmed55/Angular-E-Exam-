import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SimpleProfessor } from 'src/app/Models/SimpleProfessor';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-to-professor-role',
  templateUrl: './add-to-professor-role.component.html',
  styleUrls: ['./add-to-professor-role.component.css']
})
export class AddToProfessorRoleComponent implements OnInit {

  hide = true;


  professors: SimpleProfessor[]
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

    this.GetProfessorProfessors()

    this.professorForm=this.fb.group({
      prof:[0,Validators.required],
    })
  }

  displayedColumns: string[]=['id', 'prof_code'  , 'first_name' , 'last_name' ,  'email' ,'password' , "action"]




  AddtoProfessors(){
    if(this.professorForm.value.prof != 0){
      this.service.ChangeToProfessor(this.professorForm.value.prof).subscribe(success=>{
        this.ngOnInit();
        this.message="Professor was Added Sucessfully";
        this.route.navigate(['/admin/ProfessorsList']).then(x=>{window.location.reload();});
      },ex=>this.errorMsg='Can Not Change the Role');
    }
    else{
      this.errorMsg='Can Not Change the Role';
    }
   }

   GetProfessorProfessors() {
    this.service.GetAdminProfessors().subscribe(subs=>{
      this.professors=subs;
    },ex=>this.errorMsg = 'No Professors Found');
  }

}
