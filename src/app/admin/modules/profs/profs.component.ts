import { Component, OnInit , ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { NewProfDialogComponent } from '../new-prof-dialog/new-prof-dialog.component';
import { EditProfDialogComponent } from '../edit-prof-dialog/edit-prof-dialog.component';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import  { ProfessorsModel }  from 'src/app/Models/ProfessorsModel';
import { Router } from '@angular/router';


export interface PeriodicElement {
  id:any;
  prof_code?:any;
  first_name?:any;
  last_name?:any;
  email?:any;
  password?:any;
}

@Component({
  selector: 'app-profs',
  templateUrl: './profs.component.html',
  styleUrls: ['./profs.component.css']
})
export class ProfsComponent implements OnInit {

  professors:ProfessorsModel[]=[];


  displayedColumns: string[]=['id', 'first_name' ,'last_name' , 'prof_code'  , 'email' ,'password' , "action"]
  dataSource = new MatTableDataSource<PeriodicElement>(this.professors);

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
      this.getProfessors();
     }


  openDialog() {
    const dialogRef = this.dialog.open(NewProfDialogComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 editDialog(prof_code:any,id:any) {
    const dialogRef = this.dialog.open(EditProfDialogComponent, { width:'30%',
    data: { ProfessorCode: prof_code,
      Id:id,
    },});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getProfessors() {
    this.service.GetAllprofessors().subscribe(list=>{
      this.professors=list;
      console.log(this.professors);
   });
  }

  DeleteConfirm(id:any){
    console.log(id);
    this.service.DeleteProfessor(id).subscribe(s=>{
     console.log('success');
     this.getProfessors();
     this.route.navigate(['profs']).then(x=>{window.location.reload();});
    },ex=>console.log(ex));
  }

}
