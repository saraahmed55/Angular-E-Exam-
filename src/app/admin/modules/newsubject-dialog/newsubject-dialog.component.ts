import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subjects } from 'src/app/Models/Subjects';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-newsubject-dialog',
  templateUrl: './newsubject-dialog.component.html',
  styleUrls: ['./newsubject-dialog.component.css']
})
export class NewsubjectDialogComponent implements OnInit {

  message:string;
  errorMsg:string;
  subjects:Subjects;

  constructor(
    private service:AdminService,
    private http:HttpClient,
    private route: Router,
    private fb:FormBuilder,
  ) { }

  SubjectsForm:FormGroup;
  ngOnInit(): void {

    this.subjects = {
      id:0,
      name:'',
    };


  this.SubjectsForm=this.fb.group({
    name:['',Validators.required],

  })
}
  displayedColumns: string[]=['id', 'name']

  validateRegisterModel() {
    this.subjects.name=this.SubjectsForm.value.name;

  }

  AddNewSubject(){
    this.validateRegisterModel();
    console.log(this.subjects);
    this.service.AddNewSubject(this.subjects).subscribe(list=>{
      this.ngOnInit();
      this.message="Added Subject Sucessfully";
      this.route.navigate(['/admin/subjects']).then(x=>{window.location.reload();});
    },ex=>this.errorMsg=ex);

  }
}
