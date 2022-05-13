import { Component, NgModule, OnInit } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faSmile, fas } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})

export class SubmitComponent implements OnInit {
  isOpen:boolean=false;
  faSmile=faSmile;

  constructor() { }

  ngOnInit(): void {
  }
  toggleNav(){
    this.isOpen= !this.isOpen
  }

}
