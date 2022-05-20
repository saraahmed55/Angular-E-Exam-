import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';
import {MatPaginator} from '@angular/material/paginator';
import { AdminService } from 'src/app/services/admin.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



export interface PeriodicElement {
  id:number;
  student_code?:string;
  first_name?:string;
  last_name?:string;
  email?:string;
  level?:string;
  department_id?:number;
  password?:string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:any=[];
  displayedColumns: string[]=['id', 'student_code'  , 'first_name' , 'last_name' , 'level' , 'email' ,'department_id' ,'password' , "action"]
  dataSource = new MatTableDataSource<PeriodicElement>(this.students);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

 applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public dialog: MatDialog,
    private route: Router,
    private service:AdminService
    ) {
  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getStudents();
  }
  getStudents() {
    this.service.GetAllStudents().subscribe(list=>{
      this.students=list;
   });
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent , { width:'50%'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editDialog(student_code:any,id:any) {
    console.log(student_code,id);
    const dialogRef = this.dialog.open(DialogEditComponent , { width:'50%',
    data: { StudentCode: student_code,
            Id:id,
    },});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  DeleteConfirm(id:any){
    console.log(id);
    this.service.DeleteStudent(id).subscribe(s=>{
     console.log('success');
     this.getStudents();
     this.route.navigate(['/admin/students']).then(x=>{window.location.reload();});
    },ex=>console.log(ex));
  }
}
