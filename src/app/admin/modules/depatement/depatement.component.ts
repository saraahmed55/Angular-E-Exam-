import { Component, OnInit  , ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { DialogDepartComponent } from '../dialog-depart/dialog-depart.component';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { Departments } from 'src/app/Models/Departments';
import { Router } from '@angular/router';



export interface PeriodicElement {
  id:string;
  name?:string;

}




@Component({
  selector: 'app-depatement',
  templateUrl: './depatement.component.html',
  styleUrls: ['./depatement.component.css']
})
export class DepatementComponent implements OnInit {

  department:Departments[]=[];

  displayedColumns: string[]=['id', 'name' , "action" ]
  dataSource = new MatTableDataSource<PeriodicElement>(this.department);

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

  openDialog() {
    const dialogRef = this.dialog.open(DialogDepartComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getDepartments();
  }

  getDepartments() {
    this.service.GetAllDepartments().subscribe(list=>{
      this.department=list;
      console.log(this.department);
   });
  }

  DeleteConfirm(id:any){
    console.log(id);
    this.service.DeleteDepartment(id).subscribe(s=>{
     console.log('success');
     this.getDepartments();
     this.route.navigate(['departs']).then(x=>{window.location.reload();});
    },ex=>console.log(ex));
  }

}
