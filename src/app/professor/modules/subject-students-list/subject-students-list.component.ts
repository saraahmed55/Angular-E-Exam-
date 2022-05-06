import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from 'src/app/services/professor.service';
import { Students } from 'src/app/Models/Students';

export interface PeriodicElement {
  student_code:string;
  first_name:string;
  last_name:string;
  email:string;
  level:string;
  department_id:any;
}

@Component({
  selector: 'app-subject-students-list',
  templateUrl: './subject-students-list.component.html',
  styleUrls: ['./subject-students-list.component.css']
})
export class SubjectStudentsListComponent implements OnInit {

  students:Students[]=[];
  prof_code:any;
  id:any;

  displayedColumns: string[]=['id', 'student_code' , 'first_name' ,'last_name' ,"action" ]
  dataSource = new MatTableDataSource<PeriodicElement>(this.students);

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
    console.log(this.id+"  "+this.prof_code)
    this.getStudentsOfSubjects(this.prof_code,this.id)
  }

  getStudentsOfSubjects(profcode:any, subjectid:any){
    this.service.getStudentsOfSubjects(profcode,subjectid).subscribe(list=>{
      this.students=list;
      console.log(this.students);
   });
  }
}
