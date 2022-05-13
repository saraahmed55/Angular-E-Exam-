import { Component, OnInit } from '@angular/core';
import { Departments } from 'src/app/Models/Departments';
import { Subjects } from 'src/app/Models/Subjects';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {

  prof_code:any;
  departmentName:Departments[];
  subjectName:Subjects[];
  subject_id:any;
  studentCount:any;

  constructor(
    private service:ProfessorService,
  ) { }

  ngOnInit(): void {
    this.prof_code=localStorage.getItem("prof_code")
    this.subject_id=localStorage.getItem("id")
    this.subjectInfoDepartment(this.prof_code,this.subject_id);
    this.getsubjectName(this.prof_code,this.subject_id)
    this.getsubjectStudentCount(this.prof_code,this.subject_id)
  }

  getsubjectStudentCount(prof_code:any,subject_id:any){
    this.service.getsubjectStudentCount(prof_code,subject_id).subscribe(list=>{
      this.studentCount=list;
   });
  }

  getsubjectName(prof_code:any,subject_id:any){
    this.service.getsubjectName(prof_code,subject_id).subscribe(list=>{
      this.subjectName=list;
   });
  }
  subjectInfoDepartment(prof_code:any,subject_id:any){
    this.service.subjectInfoDepartment(prof_code,subject_id).subscribe(list=>{
      this.departmentName=list;
   });
  }


}
