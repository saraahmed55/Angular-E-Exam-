import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';
import { AverageResults } from 'src/app/Models/AverageResults';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  avgResults:AverageResults[]=[]
  title = 'angular1212';
  data : any;
  highchart : any

  constructor(
    private service:AdminService
  ) { }

  ngOnInit(): void {
    this.getResultsAverage()
  }
  getResultsAverage(){
    this.service.getResultsAverage().subscribe(list=>{
      this.data=list;
      console.log(this.data[0]);
      Highcharts.chart('container', {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Average Students Results'
        },
        credits: {
          enabled: false
        },
        series: [

          {
          type:'column',
          name: 'Bar 1',
          data:this.data
          }
        ]
        });
   });
  }
  }


