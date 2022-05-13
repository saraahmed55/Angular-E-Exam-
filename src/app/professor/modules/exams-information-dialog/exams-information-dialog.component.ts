import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from 'src/app/services/professor.service';
import { AuthService } from 'src/app/services/auth.service';
import { ExamInformation } from 'src/app/Models/ExamInformation';

export interface PeriodicElement {
  duration_minutes:any;
  mcq_easy_questionsNumber:any;
  mcq_medium_questionsNumber:any;
  mcq_hard_questions:any;
  tf_easy_questionsNumber:any;
  tf_medium_questionsNumber:any;
  tf_hard_questionsNumber:any;
}

@Component({
  selector: 'app-exams-information-dialog',
  templateUrl: './exams-information-dialog.component.html',
  styleUrls: ['./exams-information-dialog.component.css']
})
export class ExamsInformationDialogComponent implements OnInit {

  exams:ExamInformation[]=[];
  prof_code:any;
  id:any;
  examId:any;

  displayedMcqColumns: string[]=['mcq_easy_questionsNumber', 'mcq_medium_questionsNumber' , 'mcq_hard_questionsNumber']
  displayedTFColumns: string[]=[ 'tf_easy_questionsNumber' ,'tf_medium_questionsNumber','tf_hard_questionsNumber' ]
  dataSource = new MatTableDataSource<PeriodicElement>(this.exams);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
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
    this.examId=this.data.Id;
    this.GetExamsInformation(this.prof_code,this.id,this.examId)
  }

  GetExamsInformation(profcode:any, subjectid:any,examId:any){
    this.service.GetExamsInformation(profcode,subjectid,examId).subscribe(list=>{
      this.exams=list;
      console.log(this.exams);
   });
  }

  openInformationDialog(subject_id:any){
    const dialogRef = this.dialog.open(ExamsInformationDialogComponent , { width:'50%'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
