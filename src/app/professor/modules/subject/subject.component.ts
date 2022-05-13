import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subjects } from 'src/app/Models/Subjects';
import { ProfessorService } from 'src/app/services/professor.service';
import { CreateNewExamComponent } from '../create-new-exam/create-new-exam.component';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

export interface PeriodicElement {
  id:string;
  name?:string;

}

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subject_id:any;

  constructor(
    public dialog: MatDialog,
    private http:HttpClient,
    private route: Router,
    private service:ProfessorService,
    ) { }

    opensSubjectInfoDialog() {
    const dialogRef = this.dialog.open(InfoDialogComponent, { width:'25%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2() {
    const dialogRef = this.dialog.open(CreateNewExamComponent, { width:'50%' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.subject_id=localStorage.getItem('id');
  }

  ShowIdSubject(id:any){
    this.service.installsubjectStorage(id);
  }

}
