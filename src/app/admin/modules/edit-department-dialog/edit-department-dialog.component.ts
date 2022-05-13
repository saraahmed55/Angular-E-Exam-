import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Departments } from 'src/app/Models/Departments';
import { EditDepartmentModel } from 'src/app/Models/EditDepartmentModel';


export interface PeriodicElement {
  id:number;
  name:string;
}

@Component({
  selector: 'app-edit-department-dialog',
  templateUrl: './edit-department-dialog.component.html',
  styleUrls: ['./edit-department-dialog.component.css']
})
export class EditDepartmentDialogComponent implements OnInit {

  hide = true;
  Data:any;
  message:string;
  errorMsg:string;
  isEditMode:boolean;
  code:any;
  id:any;
  department:Departments;
  editData:EditDepartmentModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:AdminService,
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
  ) { }

  departmentForm:FormGroup;
  ngOnInit(): void {
    this.id=this.data.Id;
    this.departmentForm=this.fb.group({
      name:[''],
    });
    this.editData={
      id:'',
      name: '',
    }
    this.service.GetDepartment(this.id).subscribe(x=>{
      this.Data=x;
      this.isEditMode=true;
      this.AddData();
      },ex=>console.log(ex));
  }

  displayedColumns: string[]=['id', 'name' , "action"]

  AddData() {
    if(this.Data!==null){
    this.departmentForm.patchValue({
      name:this.Data.name,
    })
   }
  }

  AddDepartment(){
    if(this.departmentForm.valid){
      this.editData.name=this.departmentForm.value.name;

      this.service.EditDepartment(this.editData,this.id).subscribe(x=>{
        this.message="Information is Updated Succesfully";
        this.route.navigate(['departments']).then(x=>{window.location.reload();});
      },ex=>console.log(ex));
    }
  }
}
