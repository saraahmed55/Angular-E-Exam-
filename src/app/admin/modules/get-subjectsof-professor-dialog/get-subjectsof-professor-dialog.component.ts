import { Component, Inject, OnInit , ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Subjects } from 'src/app/Models/Subjects';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/app/services/professor.service';

export interface PeriodicElement {
  id:string;
  name?:string;
}

@Component({
  selector: 'app-get-subjectsof-professor-dialog',
  templateUrl: './get-subjectsof-professor-dialog.component.html',
  styleUrls: ['./get-subjectsof-professor-dialog.component.css']
})
export class GetSubjectsofProfessorDialogComponent implements OnInit {

  subjects:Subjects[]=[];
  id:any;
  displayedColumns: string[]=['id', 'name' , "action" ]
  dataSource:MatTableDataSource<Subjects>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private service:AdminService,
    private route: Router,
    private ProfessorService:ProfessorService,
    ) { }

  ngOnInit(): void {
    this.id=this.data.Id;
    this.getProfessorSubjects(this.id);
  }
  getProfessorSubjects(prof_code:any) {
    this.service.getProfessorSubjects(prof_code).subscribe(list=>{
      this.subjects=list;
      console.log(this.subjects)
      this.dataSource = new MatTableDataSource(this.subjects);
      this.dataSource.paginator = this.paginator;
   });
  }
  DeleteConfirm(id:any){
    this.service.DeletelevelSubject(id).subscribe(s=>{
     console.log('success');
     this.route.navigate(['/admin/professors']).then(x=>{window.location.reload();});
    },ex=>console.log(ex));
  }

  ShowIdSubject(id:any){
    this.ProfessorService.installsubjectStorage(id);
  }

}
