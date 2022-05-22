import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { TrueOrFalse } from 'src/app/Models/TrueOrFalse';
import { NewQuestionDialogComponent } from '../new-question-dialog/new-question-dialog.component';
import { EditQuesDialogComponent } from '../edit-ques-dialog/edit-ques-dialog.component';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id:string;
  difficulty?:string;
  chapter_id?:string;
  question_text?:string;
  CorrectAnswer?:string;

}
@Component({
  selector: 'app-question-true-orfalse',
  templateUrl: './question-true-orfalse.component.html',
  styleUrls: ['./question-true-orfalse.component.css']
})
export class QuestionTrueOrfalseComponent implements OnInit {


  trueOrFalse:TrueOrFalse[]=[];

  displayedColumns: string[]=['id', 'chapters_id' ,"difficulty","question_text","CorrectAnswer", "action" ]
  dataSource: MatTableDataSource<TrueOrFalse>;

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
    private service:AdminService
  ) { }


  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.service.GetAllTorFQuestions().subscribe(list=>{
      this.trueOrFalse=list;
      this.dataSource = new MatTableDataSource(this.trueOrFalse);
      this.dataSource.paginator = this.paginator;
      console.log(this.trueOrFalse);
   });
  }

  DeleteConfirm(id:any){
    console.log(id);
    this.service.DeleteTorFQuestion(id).subscribe(s=>{
     console.log('success');
     this.getQuestions();
     this.route.navigate(['/admin/question-TorF']).then(x=>{window.location.reload();});
    },ex=>console.log(ex));
  }


  openDialog() {
    const dialogRef = this.dialog.open(NewQuestionDialogComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editDialog() {
    const dialogRef = this.dialog.open(EditQuesDialogComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }




}
