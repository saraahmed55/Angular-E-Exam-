import { Exams } from 'src/app/Models/Exams';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from 'src/app/services/professor.service';
import { AuthService } from 'src/app/services/auth.service';

export interface PeriodicElement {
  exam_id:any;
  start_time:any;
  end_time:any;
  duration_minutes:any;
}



@Component({
  selector: 'app-subject-exams-list',
  templateUrl: './subject-exams-list.component.html',
  styleUrls: ['./subject-exams-list.component.css']
})
export class SubjectExamsListComponent implements OnInit {

  exams:Exams[]=[];
  prof_code:any;
  id:any;

  displayedColumns: string[]=['id', 'start_time' , 'end_time' ,'duration_minutes' ,"action" ]
  dataSource = new MatTableDataSource<PeriodicElement>(this.exams);

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
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.prof_code=localStorage.getItem("prof_code")
    this.id=localStorage.getItem("id")
    this.getProfessorSubjectExams(this.prof_code,this.id)
  }

  getProfessorSubjectExams(profcode:any, subjectid:any){
    this.service.getProfessorSubjectExams(profcode,subjectid).subscribe(list=>{
      console.log("in exams function")
      this.exams=list;
      console.log(this.exams);
   });
  }

}
