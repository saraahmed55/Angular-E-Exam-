import { Component, OnInit , ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from 'src/app/services/professor.service';
import { AuthService } from 'src/app/services/auth.service';
import { Mcqs } from 'src/app/Models/Mcqs';
import { DeficultyEnum } from 'src/app/Models/DeficultyEnum';
import { CorrectMcqEnum } from 'src/app/Models/CorrectMcqEnum';
import { ChaptersAddMcqQuestionsDialogComponent } from '../chapters-add-mcq-questions-dialog/chapters-add-mcq-questions-dialog.component';
import { EditQuestionMcqComponent } from '../edit-question-mcq/edit-question-mcq.component';


export interface PeriodicElement {
  id:any;
  chapter_id:number;
  difficulty:DeficultyEnum;
  question_text:string;
  answer1:String;
  answer2:String;
  answer3:String;
  answer4:String;
  CorrectAnswer:CorrectMcqEnum;
}

@Component({
  selector: 'app-chapters-questions-mcq',
  templateUrl: './chapters-questions-mcq.component.html',
  styleUrls: ['./chapters-questions-mcq.component.css']
})
export class ChaptersQuestionsMcqComponent implements OnInit {

  mcqs:Mcqs[]=[];
  prof_code:any;
  subject_id:any;
  chapter_id:any;

  displayedColumns: string[]=['mcq_id' ,'difficulty' ,'question_text' ,'answer1' , 'answer2' ,'answer3' ,'answer4','CorrectAnswer' ,"action" ]
  dataSource = new MatTableDataSource<PeriodicElement>(this.mcqs);

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
    this.subject_id=localStorage.getItem("id")
    this.chapter_id=localStorage.getItem("chapter_id")
    this.getChapterMCQ(this.prof_code,this.subject_id,this.chapter_id)
  }

  getChapterMCQ(profcode:any,subjectid:any,chapterid:any) {
    this.service.getChapterMCQ(profcode,subjectid,chapterid).subscribe(list=>{
      this.mcqs=list;
   });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ChaptersAddMcqQuestionsDialogComponent , { width:'50%'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editDialog(id:any) {
    console.log(id);
    const dialogRef = this.dialog.open(EditQuestionMcqComponent , { width:'50%',
    data: {  Id:id, },});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  DeleteConfirm(id:any){
    this.service.Deletemcq(this.prof_code,this.subject_id,this.chapter_id,id).subscribe(s=>{
     this.route.navigate(['professor/chaptersQuestionslistMCQ']).then(x=>{window.location.reload();});
    },ex=>console.log(ex));
  }
}
