import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departments } from 'src/app/Models/Departments';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dialog-depart',
  templateUrl: './dialog-depart.component.html',
  styleUrls: ['./dialog-depart.component.css']
})
export class DialogDepartComponent implements OnInit {

  message:string;
  errorMsg:string;
  departments:Departments;

  constructor(
    private service:AdminService,
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
  ) { }

  departmentForm:FormGroup;
  ngOnInit(): void {

    this.departments = {
      id:0,
      name:'',
    };


  this.departmentForm=this.fb.group({
    name:['',Validators.required],

  })
}


  displayedColumns: string[]=['id', 'name']

  validateRegisterModel() {
    this.departments.name=this.departmentForm.value.name;

}



  AddNewdepartment(){
    this.validateRegisterModel();
    console.log(this.departments);
    this.service.AddNewdepartment(this.departments).subscribe(list=>{
      this.message="Added Departents Sucessfully";
      this.route.navigate(['/admin/departments']).then(x=>{window.location.reload();});
    },ex=>this.errorMsg=ex);

   }
}
