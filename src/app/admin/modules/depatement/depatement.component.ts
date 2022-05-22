import { Component, OnInit  , ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { DialogDepartComponent } from '../dialog-depart/dialog-depart.component';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { Departments } from 'src/app/Models/Departments';
import { Router } from '@angular/router';
import { EditDepartmentDialogComponent } from '../edit-department-dialog/edit-department-dialog.component';


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
  dataSource: MatTableDataSource<Departments>;

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
    this.getDepartments();
  }

  getDepartments() {
    this.service.GetAllDepartments().subscribe(list=>{
      this.department=list;
      this.dataSource = new MatTableDataSource(this.department);
      this.dataSource.paginator = this.paginator;
      console.log(this.department);
   });
  }

  DeleteConfirm(id:any){
    console.log(id);
    this.service.DeleteDepartment(id).subscribe(s=>{
     console.log('success');
     this.getDepartments();
     this.route.navigate(['/admin/departments']).then(x=>{window.location.reload();});
    },ex=>console.log(ex));
  }

  editDialog(id:any) {
    const dialogRef = this.dialog.open(EditDepartmentDialogComponent , { width:'50%',
    data: { Id:id,},});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
