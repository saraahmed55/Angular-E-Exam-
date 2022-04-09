import { Component, OnInit , ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { NewsubjectDialogComponent } from '../newsubject-dialog/newsubject-dialog.component';
import { Subjects } from 'src/app/Models/Subjects';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

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
  dataSource = new MatTableDataSource<PeriodicElement>(this.subjects);

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
      console.log(this.subjects);
   });
  }


  DeleteConfirm(id:any){
    console.log(id);
    this.service.DeleteSubject(id).subscribe(s=>{
     console.log('success');
     this.getsubjects();
     this.route.navigate(['subjects']).then(x=>{window.location.reload();});
    },ex=>console.log(ex));
  }



}