import { Component, OnInit } from '@angular/core';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  isOpen:boolean=false;
  faSmile=faSmile;
  faBook=faBook;


  constructor() { }

  ngOnInit(): void {
  }
 
  toggleNav(){
    this.isOpen= !this.isOpen
  }

}
