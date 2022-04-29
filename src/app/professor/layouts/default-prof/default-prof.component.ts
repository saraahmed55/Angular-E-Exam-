import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-prof',
  templateUrl: './default-prof.component.html',
  styleUrls: ['./default-prof.component.css']
})
export class DefaultProfComponent implements OnInit {
  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
