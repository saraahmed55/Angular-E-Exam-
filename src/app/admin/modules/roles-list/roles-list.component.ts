import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { DialogDepartComponent } from '../dialog-depart/dialog-depart.component';
import { Roles } from 'src/app/Models/Roles';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

 role:Roles[]=[];

  displayedColumns: string[]=['id', 'name', "action" ]
  dataSource = new MatTableDataSource<Roles>(this.role);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(
    public dialog: MatDialog,
    private http:HttpClient,
    private service:AdminService
    ) {}

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
        this.GetAllRoles();
      }

      GetAllRoles() {
        this.service.GetAllRoles().subscribe(list=>{
          this.role=list;
          console.log(this.role);
       });
      }

      

}
