import { Component, OnInit } from '@angular/core';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';





@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.css']
})
export class StudentAccountComponent implements OnInit {
  isOpen:boolean=false;
  faLocationArrow=faLocationArrow;
  faBookMedical=faBookMedical;
  faGraduationCap=faGraduationCap;
  faCaretDown =faCaretDown ;

  constructor() { }

  ngOnInit(): void {
  }
  toggleNav(){
    this.isOpen= !this.isOpen
  }

  
}
