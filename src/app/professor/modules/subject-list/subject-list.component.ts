import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from 'src/app/services/professor.service';
import { Subjects } from 'src/app/Models/Subjects';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects:Subjects[]=[];
  prof_code:any;
  subject_id:any;

  displayedColumns: string[]=['id', 'name' , "action" ]
  dataSource:MatTableDataSource<Subjects>;

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
    this.prof_code=localStorage.getItem("prof_code")
    console.log(this.prof_code)
    this.getProfessorSubjects(this.prof_code);
  }

  ShowIdSubject(id:any){
    this.service.installsubjectStorage(id);
  }

  getProfessorSubjects(profcode:any) {
    this.service.getProfessorSubjects(profcode).subscribe(list=>{
      this.subjects=list;
      this.dataSource = new MatTableDataSource(this.subjects);
      this.dataSource.paginator = this.paginator;
   });
  }
}
