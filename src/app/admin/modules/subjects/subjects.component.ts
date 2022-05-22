import { Component, OnInit , ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { NewsubjectDialogComponent } from '../newsubject-dialog/newsubject-dialog.component';
import { Subjects } from 'src/app/Models/Subjects';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { EditSubjectDialogComponent } from '../edit-subject-dialog/edit-subject-dialog.component';

export interface PeriodicElement {
  id:string;
  name?:string;

}


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects:Subjects[]=[];


  displayedColumns: string[]=['id', 'name' , "action" ]
  dataSource:MatTableDataSource<Subjects>;

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
    this.getsubjects();
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewsubjectDialogComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getsubjects() {
    this.service.GetAllSubjects().subscribe(list=>{
      this.subjects=list;
      this.dataSource = new MatTableDataSource(this.subjects);
      this.dataSource.paginator = this.paginator;
   });
  }


  DeleteConfirm(id:any){
    console.log(id);
    this.service.DeleteSubject(id).subscribe(s=>{
     console.log('success');
     this.getsubjects();
     this.route.navigate(['/admin/subjects']).then(x=>{window.location.reload();});
    },ex=>console.log(ex));
  }

  editDialog(id:any) {
    const dialogRef = this.dialog.open(EditSubjectDialogComponent , { width:'50%',
    data: { Id:id,},});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
