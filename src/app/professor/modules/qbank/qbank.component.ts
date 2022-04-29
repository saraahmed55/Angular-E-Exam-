import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { AddQComponent } from '../add-q/add-q.component';
import { EditQComponent } from '../edit-q/edit-q.component';

export interface PeriodicElement {
  id:string;
  name?:string;
  type?:string;
  answer?:string;
  choices?:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:'1' , name:'what is fci' ,type:'mcQ' , answer:'a' , choices:'a-gfgd  , b-hghjf'},
  {id:'2' , name:'what is fci' ,type:'mcQ'},

  
];

@Component({
  selector: 'app-qbank',
  templateUrl: './qbank.component.html',
  styleUrls: ['./qbank.component.css']
})
export class QbankComponent implements OnInit {

  displayedColumns: string[]=['id', 'name' ,'answer' , 'choices',"action" ]
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddQComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editDialog() {
    const dialogRef = this.dialog.open(EditQComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;

  }

}
