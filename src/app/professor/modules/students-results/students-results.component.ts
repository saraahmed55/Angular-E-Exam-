import { Component, OnInit ,  ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  studentname?:string;
  

 
}

const ELEMENT_DATA: PeriodicElement[] = [
 {studentname:'sabreen'  },
 

 
];

@Component({
  selector: 'app-students-results',
  templateUrl: './students-results.component.html',
  styleUrls: ['./students-results.component.css']
})
export class StudentsResultsComponent implements OnInit {

  displayedColumns: string[]=['studentname'   ]
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




  constructor() { }

  ngOnInit(): void {
  }

}
