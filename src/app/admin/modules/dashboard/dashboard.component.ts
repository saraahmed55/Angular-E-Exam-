import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AverageResults } from 'src/app/Models/AverageResults';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  avgResults:AverageResults[]=[]
  Highcharts=Highcharts;
  chartOptions!: {};

  constructor(
    private service:AdminService
  ) { }

  ngOnInit(): void {
this.getResultsAverage()
    this.chartOptions={

        chart: {
            type: 'column'
        },
        title: {
            text: 'Students Average Results'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total percent of Students Results'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [
            {
                name: "Browsers",
                colorByPoint: true,
                keys: ['exams_id', 'avg_result'],
                data: this.avgResults

            }
        ],

    }
  }
  getResultsAverage(){
    this.service.getResultsAverage().subscribe(list=>{
      this.avgResults=list;
      for (let i = 0; i < list.length; i++) {
        // this.avgResults = this.avgResults.concat([ { name: list[i], y: list[i], selected: false
        //  } ]);

   }});
  }
  }


