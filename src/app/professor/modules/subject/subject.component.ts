import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreateNewExamComponent } from '../create-new-exam/create-new-exam.component';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';




@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  

  constructor(public dialog: MatDialog) { }
  openDialog1() {
    const dialogRef = this.dialog.open(InfoDialogComponent, { width:'15%'});

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
  }

}
