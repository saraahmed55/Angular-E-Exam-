import { Exams } from 'src/app/Models/Exams';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from 'src/app/services/professor.service';
import { AuthService } from 'src/app/services/auth.service';
import { ExamsInformationDialogComponent } from '../exams-information-dialog/exams-information-dialog.component';
import { StudentsResultsDialogComponent } from 'src/app/admin/modules/students-results-dialog/students-results-dialog.component';


@Component({
  selector: 'app-subject-exams-list',
  templateUrl: './subject-exams-list.component.html',
  styleUrls: ['./subject-exams-list.component.css']
})
export class SubjectExamsListComponent implements OnInit {

  exams:Exams[]=[];
  prof_code:any;
  id:any;

  displayedColumns: string[]=['id','name', 'start_time' , 'end_time' ,'duration_minutes' ,"action" ]
  dataSource: MatTableDataSource<Exams>;

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
    this.getProfessorSubjectExams(this.prof_code,this.id)
  }

  getProfessorSubjectExams(profcode:any, subjectid:any){
    this.service.getProfessorSubjectExams(profcode,subjectid).subscribe(list=>{
      this.exams=list;
      this.dataSource = new MatTableDataSource(this.exams);
      this.dataSource.paginator = this.paginator;
      console.log(this.exams);
   });
  }

  openInformationDialog(exam_id:any){
    const dialogRef = this.dialog.open(ExamsInformationDialogComponent , { width:'50%',data: {  Id:exam_id,}});
    console.log(exam_id)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getStudentsResults(exam_id:any){
    const dialogRef = this.dialog.open( StudentsResultsDialogComponent , { width:'50%',data: {  Id:exam_id,}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
