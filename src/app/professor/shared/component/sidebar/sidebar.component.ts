import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  FirstName:any;
  LastName:any;
  email:any;
  constructor() { }

  ngOnInit(): void {
    this.email=localStorage.getItem('email');
    this.FirstName=localStorage.getItem('FirstName');
    this.LastName=localStorage.getItem('LastName');

  }

}
