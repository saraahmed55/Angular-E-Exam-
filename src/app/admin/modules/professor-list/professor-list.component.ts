import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { NewProfDialogComponent } from '../new-prof-dialog/new-prof-dialog.component';
import { EditProfDialogComponent } from '../edit-prof-dialog/edit-prof-dialog.component';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { professors } from 'src/app/Models/professors';
import { Router } from '@angular/router';
import { AddToProfessorRoleComponent } from '../add-to-professor-role/add-to-professor-role.component';


@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  professors:professors[]=[];
  id:any;


  displayedColumns: string[]=['id', 'first_name' ,'last_name' , 'prof_code'  , 'email'  , "action"]
  dataSource = new MatTableDataSource<professors>(this.professors);

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
      this.getProfessors(2);
     }


  openDialog() {
    const dialogRef = this.dialog.open(AddToProfessorRoleComponent, { width:'30%',});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 editDialog() {
    const dialogRef = this.dialog.open(EditProfDialogComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getProfessors(id:any) {
    this.service.GetRolesProfessors(id).subscribe(list=>{
      this.professors=list;
      console.log(this.professors);
   });
  }

  DeleteConfirm(id:any){
    console.log(id);
    this.service.DeleteProfessor(id).subscribe(s=>{
     console.log('success');
     this.route.navigate(['profs']).then(x=>{window.location.reload();});
    },ex=>console.log(ex));
  }
}
