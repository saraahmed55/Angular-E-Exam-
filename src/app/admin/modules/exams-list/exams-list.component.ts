import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { NewProfDialogComponent } from '../new-prof-dialog/new-prof-dialog.component';
import { EditProfDialogComponent } from '../edit-prof-dialog/edit-prof-dialog.component';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { Exams } from 'src/app/Models/Exams';
import { Subjects } from 'src/app/Models/Subjects';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.css']
})
export class ExamsListComponent implements OnInit {

  exams:Exams[]=[];
  id:any;

  displayedColumns: string[]=['exam_id', 'subject_name' ,'start_time' , 'end_time'  , 'duration_minutes'  , "action"]
  dataSource = new MatTableDataSource<Exams>(this.exams);

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
      this.dataSource.paginator = this.paginator;
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
      console.log(this.exams);
      this.exams=list;
      console.log(this.exams);
   });
  }


}
