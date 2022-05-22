import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { NewProfDialogComponent } from '../new-prof-dialog/new-prof-dialog.component';
import { EditProfDialogComponent } from '../edit-prof-dialog/edit-prof-dialog.component';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { AdminExams } from 'src/app/Models/AdminExams';
import { ExamsInformationDialogComponent } from 'src/app/professor/modules/exams-information-dialog/exams-information-dialog.component';
import { StudentsResultsDialogComponent } from '../students-results-dialog/students-results-dialog.component';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.css']
})
export class ExamsListComponent implements OnInit {

  exams:AdminExams[]=[];
  id:any;

  displayedColumns: string[]=['exam_id','name', 'subject_name' ,'start_time' , 'end_time'  , 'duration_minutes' ,'action']
  dataSource: MatTableDataSource<AdminExams>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(
    public dialog: MatDialog,
    private http:HttpClient,
    private service:AdminService
    ) { }

    ngOnInit(): void {
      this.getExams();
     }


  openDialog() {
    const dialogRef = this.dialog.open(NewProfDialogComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 editDialog() {
    const dialogRef = this.dialog.open(EditProfDialogComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getExams() {
    this.service.GetExams().subscribe(list=>{
      this.exams=list;
      this.dataSource = new MatTableDataSource(this.exams);
      this.dataSource.paginator = this.paginator;
   });
  }

  getStudentsResults(exam_id:any){
    const dialogRef = this.dialog.open( StudentsResultsDialogComponent , { width:'50%',data: {  Id:exam_id,}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openInformationDialog(exam_id:any){
    const dialogRef = this.dialog.open(ExamsInformationDialogComponent , { width:'50%',data: {  Id:exam_id,}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
