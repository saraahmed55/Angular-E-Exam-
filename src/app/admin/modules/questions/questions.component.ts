import { Component, OnInit , ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { NewQuestionDialogComponent } from '../new-question-dialog/new-question-dialog.component';
import { EditQuesDialogComponent } from '../edit-ques-dialog/edit-ques-dialog.component';
import { Mcqs } from 'src/app/Models/Mcqs';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id:string;
  name?:string;
  type?:string;
  answer?:string;
  choices?:string;

}


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  mcq:Mcqs[]=[];

  displayedColumns: string[]=['id', 'chapters_id' ,"difficulty","question_text","answer1","answer2" ,"answer3" ,"answer4" ,"CorrectAnswer", "action" ]
  dataSource = new MatTableDataSource<PeriodicElement>(this.mcq);

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
    this.dataSource.paginator = this.paginator;
    this.getQuestions();
  }

  getQuestions() {
    this.service.GetAllMCQQuestions().subscribe(list=>{
      this.mcq=list;
      console.log(this.mcq);
   });
  }

  DeleteConfirm(id:any){
    console.log(id);
    this.service.DeleteMCQQuestion(id).subscribe(s=>{
      this.getQuestions();
     console.log('success');
     this.getQuestions();
     this.route.navigate(['question-mcq']).then(x=>{window.location.reload();});
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
