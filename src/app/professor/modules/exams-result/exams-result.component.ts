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
  result: any;

}

@Component({
  selector: 'app-exams-result',
  templateUrl: './exams-result.component.html',
  styleUrls: ['./exams-result.component.css']
})
export class ExamsResultComponent implements OnInit {

  studentsResults:StudentSubjectResults[]=[];
  prof_code:any;
  id:any;
  student_code:any;

  displayedColumns: string[]=['exams_id','result']
  dataSource = new MatTableDataSource<PeriodicElement>(this.studentsResults);

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
    this.dataSource.paginator = this.paginator;
    this.prof_code=localStorage.getItem("prof_code")
    this.id=localStorage.getItem("id")
    this.student_code=localStorage.getItem("student_code")
    this.getResultsOfStudents(this.prof_code,this.id,this.student_code)

  }
  getResultsOfStudents(profcode:any, subjectid:any,student_code:any){
    this.service.GetstudentResult(profcode,subjectid,student_code).subscribe(list=>{
      this.studentsResults=list;
      console.log(this.studentsResults);
   });
  }

}
