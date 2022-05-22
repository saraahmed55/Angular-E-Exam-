import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Chapters } from 'src/app/Models/Chapters';
import { ProfessorService } from 'src/app/services/professor.service';
import { QuestionBankExamAllQuestionsComponent } from '../question-bank-exam-all-questions/question-bank-exam-all-questions.component';


@Component({
  selector: 'app-question-bank-exam-chapters',
  templateUrl: './question-bank-exam-chapters.component.html',
  styleUrls: ['./question-bank-exam-chapters.component.css']
})
export class QuestionBankExamChaptersComponent implements OnInit {

  chapters:Chapters[]=[];
  prof_code:any;
  subject_id:any;

  displayedColumns: string[]=['id', 'chapter_number'  , 'chapter_name'  , "action"]
  dataSource: MatTableDataSource<Chapters>;

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
    this.prof_code=localStorage.getItem("prof_code")
    this.subject_id=localStorage.getItem("id")
    this.getProfessorSubjectChapters(this.prof_code,this.subject_id)
  }

  getProfessorSubjectChapters(profcode:any,subjectid:any){
    this.service.getProfessorSubjectChapters(profcode,subjectid).subscribe(list=>{
      this.chapters=list;
      this.dataSource = new MatTableDataSource(this.chapters);
      this.dataSource.paginator = this.paginator;
      console.log(this.chapters);
   });
  }


  openQuestionsDialog(id:any) {
    this.service.installChapterStorage(id);
    const dialogRef = this.dialog.open(QuestionBankExamAllQuestionsComponent, { width:'80%' });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
