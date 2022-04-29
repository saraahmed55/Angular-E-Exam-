import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  id:string;
  name?:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:'1' , name:'Mid'},
  {id:'2' , name:'Final' },

  
];




@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  displayedColumns: string[]=['id', 'name' , "action" ]
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  constructor() { }

  ngOnInit(): void {
  }

}
