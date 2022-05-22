import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from 'src/app/services/professor.service';
import { StudentSubjectResults } from 'src/app/Models/StudentSubjectResults';

export interface PeriodicElement {
  exams_id: any;
  exam_name:string;
  result: any;

}

@Component({
  selector: 'app-students-results',
  templateUrl: './students-results.component.html',
  styleUrls: ['./students-results.component.css']
})
export class StudentsResultsComponent implements OnInit {

  studentsResults:StudentSubjectResults[]=[];
  prof_code:any;
  id:any;
  student_code:any;

  displayedColumns: string[]=['exams_id','exam_name','result']
  dataSource:MatTableDataSource<StudentSubjectResults>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    public dialog: MatDialog,
    private http:HttpClient,
    private route: Router,
    private service:ProfessorService,
  ) { }

  ngOnInit(): void {
    this.prof_code=localStorage.getItem("prof_code")
    this.id=localStorage.getItem("id")
    this.student_code=localStorage.getItem("student_code")
    this.getResultsOfStudents(this.prof_code,this.id,this.student_code)

  }
  getResultsOfStudents(profcode:any, subjectid:any,student_code:any){
    this.service.GetstudentResult(profcode,subjectid,student_code).subscribe(list=>{
      this.studentsResults=list;
      this.dataSource = new MatTableDataSource(this.studentsResults);
      this.dataSource.paginator = this.paginator;
      console.log(this.studentsResults);
   });
  }

}
