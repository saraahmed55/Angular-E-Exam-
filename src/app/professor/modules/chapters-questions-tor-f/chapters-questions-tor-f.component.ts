import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from 'src/app/services/professor.service';
import { DeficultyEnum } from 'src/app/Models/DeficultyEnum';
import { CorrectTorFEnum } from 'src/app/Models/CorrectTorFEnum';
import { TrueOrFalse } from 'src/app/Models/TrueOrFalse';
import { ChaptersAddTorFQuestionsDialogComponent } from '../chapters-add-tor-f-questions-dialog/chapters-add-tor-f-questions-dialog.component';
import { EditQuestionTorFComponent } from '../edit-question-tor-f/edit-question-tor-f.component';

export interface PeriodicElement {
  id:any;
  chapters_id:any;
  difficulty:DeficultyEnum;
  question_text:string;
  CorrectAnswer:CorrectTorFEnum;
}

@Component({
  selector: 'app-chapters-questions-tor-f',
  templateUrl: './chapters-questions-tor-f.component.html',
  styleUrls: ['./chapters-questions-tor-f.component.css']
})
export class ChaptersQuestionsTorFComponent implements OnInit {

  TF:TrueOrFalse[]=[];
  prof_code:any;
  subject_id:any;
  chapter_id:any;

  displayedColumns: string[]=['tf_id' ,'difficulty' ,'question_text' ,'CorrectAnswer' ,"action" ]
  dataSource = new MatTableDataSource<PeriodicElement>(this.TF);

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
    this.getChapterTF(this.prof_code,this.subject_id,this.chapter_id)
  }

  getChapterTF(profcode:any,subjectid:any,chapterid:any) {
    this.service.getChapterTF(profcode,subjectid,chapterid).subscribe(list=>{
      this.TF=list;
   });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ChaptersAddTorFQuestionsDialogComponent , { width:'50%'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editDialog(id:any) {
    console.log(id);
    const dialogRef = this.dialog.open(EditQuestionTorFComponent , { width:'50%',
    data: {  Id:id,},});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  DeleteConfirm(id:any){
    this.service.DeleteTf(this.prof_code,this.subject_id,this.chapter_id,id).subscribe(s=>{
     this.route.navigate(['chaptersQuestionslistTorF']).then(x=>{window.location.reload();});
    },ex=>console.log(ex));
  }

}
