import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from 'src/app/services/professor.service';
import { StudentSubjectResults } from 'src/app/Models/StudentSubjectResults';
import { AdminService } from 'src/app/services/admin.service';

export interface PeriodicElement {
  id:any;
  student_code:any;
  first_name:any;
  last_name:any;
  result:any;
}


@Component({
  selector: 'app-students-results',
  templateUrl: './students-results.component.html',
  styleUrls: ['./students-results.component.css']
})
export class StudentsResultsComponent implements OnInit {

  results:any=[];
  studentsResults:StudentSubjectResults[]=[];
  examsNames:any[]=[];
  prof_code:any;
  id:any;
  student_code:any;
  displayedColumns: string[]=['student_code', 'first_name' , 'last_name'  ,'results' ]
  dataSource:MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    public dialog: MatDialog,
    private service:ProfessorService,
    private AdminService:AdminService,
  ) { }

  ngOnInit(): void {
    this.prof_code=localStorage.getItem("prof_code")
    this.getProfessorExams(this.prof_code)
  }

  getProfessorExams(prof_code:any){
    this.service.getProfessorExams(prof_code).subscribe(list=>{
          this.examsNames=list;
            for (let index = 0; index < this.examsNames.length; index++) {
              const element = this.examsNames[index];
              this.id=element.exam_id
              this.GetStudentsResults(this.id)
            }
          this.dataSource = new MatTableDataSource(this.examsNames);
          this.dataSource.paginator = this.paginator;
       });
  }
  GetStudentsResults(exam_id:any){
    this.AdminService.GetStudentsResults(exam_id).subscribe(list=>{
          this.results=list;
          console.log(this.results)
          this.dataSource = new MatTableDataSource(this.results);
          this.dataSource.paginator = this.paginator;
       });
  }
  // getResultsOfStudents(profcode:any, subjectid:any,student_code:any){
  //   this.service.GetstudentResult(profcode,subjectid,student_code).subscribe(list=>{
  //     this.studentsResults=list;
  //     this.dataSource = new MatTableDataSource(this.studentsResults);
  //     this.dataSource.paginator = this.paginator;
  //     console.log(this.studentsResults);
  //  });
  // }

}
