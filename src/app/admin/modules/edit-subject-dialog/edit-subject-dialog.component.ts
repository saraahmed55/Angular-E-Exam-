import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subjects } from 'src/app/Models/Subjects';
import { EditSubjectModel } from 'src/app/Models/EditSubjectModel';

export interface PeriodicElement {
  id:number;
  name:string;
}

@Component({
  selector: 'app-edit-subject-dialog',
  templateUrl: './edit-subject-dialog.component.html',
  styleUrls: ['./edit-subject-dialog.component.css']
})
export class EditSubjectDialogComponent implements OnInit {

  hide = true;
  Data:any;
  message:string;
  errorMsg:string;
  isEditMode:boolean;
  code:any;
  id:any;
  subjects:Subjects;
  editData:EditSubjectModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:AdminService,
    private route: Router,
    private fb:FormBuilder,
  ) { }

  subjectForm:FormGroup;
  ngOnInit(): void {
    this.id=this.data.Id;
    this.subjectForm=this.fb.group({
      name:[''],
    });
    this.editData={
      id:'',
      name: '',
    }
    this.service.GetSubject(this.id).subscribe(x=>{
      this.Data=x;
      this.isEditMode=true;
      this.AddData();
      },ex=>console.log(ex));
  }

  displayedColumns: string[]=['id', 'name' , "action"]

  AddData() {
    if(this.Data!==null){
    this.subjectForm.patchValue({
      name:this.Data.name,
    })
   }
  }

  Addsubject(){
    if(this.subjectForm.valid){
      this.editData.name=this.subjectForm.value.name;

      this.service.EditSubject(this.editData,this.id).subscribe(x=>{
        this.message="Information is Updated Succesfully";
        this.route.navigate(['/admin/subjects']).then(x=>{window.location.reload();});
      },ex=>console.log(ex));
    }
  }
}
