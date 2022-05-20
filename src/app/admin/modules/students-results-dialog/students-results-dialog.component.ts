import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id:any;
  student_code:any;
  first_name:any;
  last_name:any;
  result:any;
}

@Component({
  selector: 'app-students-results-dialog',
  templateUrl: './students-results-dialog.component.html',
  styleUrls: ['./students-results-dialog.component.css']
})
export class StudentsResultsDialogComponent implements OnInit {
  results:any=[];
  exam_id:any;
  displayedColumns: string[]=['student_code', 'first_name' , 'last_name'  ,'results' , "action"]
  dataSource = new MatTableDataSource<PeriodicElement>(this.results);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

 applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private route: Router,
    private service:AdminService
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.exam_id=this.data.Id;
    console.log(this.exam_id)
    this.GetStudentsResults(this.exam_id);
  }
  GetStudentsResults(exam_id:any) {
    this.service.GetStudentsResults(exam_id).subscribe(list=>{
      this.results=list;
   });
  }

  DeleteConfirm(result_id:any){
    this.service.DeleteStudentResult(result_id).subscribe(s=>{
     console.log('success');
     this.GetStudentsResults(this.exam_id);
     this.route.navigate(['/admin/ExamsList']).then(x=>{window.location.reload();});
    },ex=>console.log(ex));
  }

}
