import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfessorService } from 'src/app/services/professor.service';
import { MainExamsInformation } from 'src/app/Models/MainExamsInformation';

export interface PeriodicElement {
  start_time:any;
  end_time:any;
  duration_minutes:any;
  mcq_easy_questionsNumber:any;
  mcq_medium_questionsNumber:any;
  mcq_hard_questions:any;
  tf_easy_questionsNumber:any;
  tf_medium_questionsNumber:any;
  tf_hard_questionsNumber:any;
}


@Component({
  selector: 'app-main-exams-information-dialog',
  templateUrl: './main-exams-information-dialog.component.html',
  styleUrls: ['./main-exams-information-dialog.component.css']
})
export class MainExamsInformationDialogComponent implements OnInit {

  exams:MainExamsInformation[]=[];
  prof_code:any;
  examId:any;

  displayedColumns: string[]=['start_time', 'end_time' , 'duration_minutes']
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
    private service:ProfessorService,
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.prof_code=localStorage.getItem("prof_code")
    this.examId=this.data.Id;
    this.GetMainExamsInformation(this.prof_code,this.examId)
  }

  GetMainExamsInformation(profcode:any,examId:any){
    this.service.GetMainExamsInformation(profcode,examId).subscribe(list=>{
      this.exams=list;
      console.log(this.exams);
   });
  }

}
