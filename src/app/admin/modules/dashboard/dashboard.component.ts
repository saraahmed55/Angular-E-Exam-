import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Highcharts=Highcharts;
  chartOptions!: {};

  countStudent:any;
  countProfessor:any;
  countExams:any;
  countQuestions:any;
  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {

    this.getcountStudent();
    this.getcountProfessor();
    this.getcountExams();
    this.getcountQuestions();
  }

  getcountStudent(){
    this.service.getcountStudent().subscribe(subs=>{
      this.countStudent=subs;
    });
  }

  getcountProfessor(){
    this.service.getcountProfessor().subscribe(subs=>{
      this.countProfessor=subs;
    });
  }

  getcountExams(){
    this.service.getcountExams().subscribe(subs=>{
      this.countExams=subs;
    });
  }

  getcountQuestions(){
    this.service.getcountQuestions().subscribe(subs=>{
        this.countQuestions=subs;
      });
  }
  }


