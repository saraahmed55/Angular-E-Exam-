import { Component, OnInit , ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { AdminResults } from 'src/app/Models/AdminResults';

export interface PeriodicElement {
   studentname?:string;



}

const ELEMENT_DATA: PeriodicElement[] = [
  {studentname:'sabreen'  },



];

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results:AdminResults[]=[];

  displayedColumns: string[]=['subject', 'exams_id', 'average_result']
  dataSource = new MatTableDataSource<AdminResults>(this.results);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




  constructor(
    private service:AdminService
  ) { }

  ngOnInit(): void {
    this.getResults();
  }

  getResults() {
    this.service.GetAvgResults().subscribe(list=>{
      this.results=list;
   });
  }

}
