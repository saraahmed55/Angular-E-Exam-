import { Component, OnInit  ,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from 'src/app/services/professor.service';
import { Chapters } from 'src/app/Models/Chapters';
import { SubjectAddChaptersDialogComponent } from '../subject-add-chapters-dialog/subject-add-chapters-dialog.component';
import { EditChaptersDialogComponent } from '../edit-chapters-dialog/edit-chapters-dialog.component';


export interface PeriodicElement {
  chapter_id:any;
  chapter_number:any;
  chapter_name:string;
  subject_id:any;
}

@Component({
  selector: 'app-subject-chapters-list',
  templateUrl: './subject-chapters-list.component.html',
  styleUrls: ['./subject-chapters-list.component.css']
})
export class SubjectChaptersListComponent implements OnInit {

  chapters:Chapters[]=[];
  prof_code:any;
  subject_id:any;

  displayedColumns: string[]=['id', 'chapter_number'  , 'chapter_name'  , "action"]
  dataSource = new MatTableDataSource<PeriodicElement>(this.chapters);

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
    this.getProfessorSubjectChapters(this.prof_code,this.subject_id)
  }

  getProfessorSubjectChapters(profcode:any,subjectid:any){
    this.service.getProfessorSubjectChapters(profcode,subjectid).subscribe(list=>{
      this.chapters=list;
      console.log(this.chapters);
   });
  }

  ShowIdchapter(id:any){
    this.service.installChapterStorage(id);
  }

  openDialog() {
    const dialogRef = this.dialog.open(SubjectAddChaptersDialogComponent , { width:'50%'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  editDialog(id:any) {
    console.log(id);
    const dialogRef = this.dialog.open(EditChaptersDialogComponent , { width:'50%',
    data: {  Id:id,},});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  DeleteConfirm(id:any){
    this.service.DeleteChapter(id,this.prof_code,this.subject_id).subscribe(s=>{
      this.route.navigate(['professorSubjectsChapters']).then(x=>{window.location.reload();});
    },ex=>console.log(ex));
  }

}
