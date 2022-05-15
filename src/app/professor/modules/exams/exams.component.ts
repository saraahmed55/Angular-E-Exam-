import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Exams } from 'src/app/Models/Exams';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from 'src/app/services/professor.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MainExamsInformationDialogComponent } from '../main-exams-information-dialog/main-exams-information-dialog.component';

export interface PeriodicElement {
  exam_id:any;
  name:any;
  start_time:any;
  end_time:any;
  duration_minutes:any;
}


@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  exams:Exams[]=[];
  prof_code:any;

  displayedColumns: string[]=['exam_id', 'name' , "action" ]
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
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.prof_code=localStorage.getItem("prof_code")
    this.getProfessorExams(this.prof_code)
  }

  getProfessorExams(profcode:any){
    this.service.getProfessorExams(profcode).subscribe(list=>{
      this.exams=list;
      console.log(this.exams);
   });
  }

  openInformationDialog(exam_id:any){
    const dialogRef = this.dialog.open(MainExamsInformationDialogComponent , { width:'50%',data: {  Id:exam_id,}});
    console.log(exam_id)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
