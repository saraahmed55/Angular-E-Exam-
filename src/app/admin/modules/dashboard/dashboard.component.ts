import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'chart.js';
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
  //   new Chart(document.getElementById("bar-chart"), {
  //     type: 'bar',
  //     data: {
  //       labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
  //       datasets: [
  //         {
  //           label: "Population (millions)",
  //           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
  //           data: [2478,5267,734,784,433]
  //         }
  //       ]
  //     },
  //     options: {
  //       legend: { display: false },
  //       title: {
  //         display: true,
  //         text: 'Predicted world population (millions) in 2050'
  //       }
  //     }
  // });
  }
  getResultsAverage(){
    this.service.getResultsAverage().subscribe(list=>{
      this.data=list;
      console.log(this.data[0]);

   });
  }

  }

//   this.chartOptions={

//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'Students Average Results'
//     },
//     accessibility: {
//         announceNewData: {
//             enabled: true
//         }
//     },
//     xAxis: {
//         type: 'category'
//     },
//     yAxis: {
//         title: {
//             text: 'Total percent of Students Results'
//         }

//     },
//     legend: {
//         enabled: false
//     },
//     plotOptions: {
//         series: {
//             borderWidth: 0,
//             dataLabels: {
//                 enabled: true,
//                 format: '{point.y:.1f}%'
//             }
//         }
//     },

//     tooltip: {
//         headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
//         pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
//     },

//     series: [
//         {
//             name: "Browsers",
//             colorByPoint: true,
//             data: [
//                 {
//                     name: "Chrome",
//                     y: 62.74,
//                     drilldown: "Chrome"
//                 },
//                 {
//                     name: "Firefox",
//                     y: 10.57,
//                     drilldown: "Firefox"
//                 },
//                 {
//                     name: "Internet Explorer",
//                     y: 7.23,
//                     drilldown: "Internet Explorer"
//                 },
//                 {
//                     name: "Safari",
//                     y: 5.58,
//                     drilldown: "Safari"
//                 },
//                 {
//                     name: "Edge",
//                     y: 4.02,
//                     drilldown: "Edge"
//                 },
//                 {
//                     name: "Opera",
//                     y: 1.92,
//                     drilldown: "Opera"
//                 },
//                 {
//                     name: "Other",
//                     y: 7.62,
//                     drilldown: null
//                 }
//             ]
//         }
//     ],
//     drilldown: {
//         breadcrumbs: {
//             position: {
//                 align: 'right'
//             }
//         },
//         series: [
//             {
//                 name: "Chrome",
//                 id: "Chrome",
//                 data: [
//                     [
//                         "v65.0",
//                         0.1
//                     ],
//                     [
//                         "v64.0",
//                         1.3
//                     ],
//                     [
//                         "v63.0",
//                         53.02
//                     ],
//                     [
//                         "v62.0",
//                         1.4
//                     ],
//                     [
//                         "v61.0",
//                         0.88
//                     ],
//                     [
//                         "v60.0",
//                         0.56
//                     ],
//                     [
//                         "v59.0",
//                         0.45
//                     ],
//                     [
//                         "v58.0",
//                         0.49
//                     ],
//                     [
//                         "v57.0",
//                         0.32
//                     ],
//                     [
//                         "v56.0",
//                         0.29
//                     ],
//                     [
//                         "v55.0",
//                         0.79
//                     ],
//                     [
//                         "v54.0",
//                         0.18
//                     ],
//                     [
//                         "v51.0",
//                         0.13
//                     ],
//                     [
//                         "v49.0",
//                         2.16
//                     ],
//                     [
//                         "v48.0",
//                         0.13
//                     ],
//                     [
//                         "v47.0",
//                         0.11
//                     ],
//                     [
//                         "v43.0",
//                         0.17
//                     ],
//                     [
//                         "v29.0",
//                         0.26
//                     ]
//                 ]
//             },
//             {
//                 name: "Firefox",
//                 id: "Firefox",
//                 data: [
//                     [
//                         "v58.0",
//                         1.02
//                     ],
//                     [
//                         "v57.0",
//                         7.36
//                     ],
//                     [
//                         "v56.0",
//                         0.35
//                     ],
//                     [
//                         "v55.0",
//                         0.11
//                     ],
//                     [
//                         "v54.0",
//                         0.1
//                     ],
//                     [
//                         "v52.0",
//                         0.95
//                     ],
//                     [
//                         "v51.0",
//                         0.15
//                     ],
//                     [
//                         "v50.0",
//                         0.1
//                     ],
//                     [
//                         "v48.0",
//                         0.31
//                     ],
//                     [
//                         "v47.0",
//                         0.12
//                     ]
//                 ]
//             },
//             {
//                 name: "Internet Explorer",
//                 id: "Internet Explorer",
//                 data: [
//                     [
//                         "v11.0",
//                         6.2
//                     ],
//                     [
//                         "v10.0",
//                         0.29
//                     ],
//                     [
//                         "v9.0",
//                         0.27
//                     ],
//                     [
//                         "v8.0",
//                         0.47
//                     ]
//                 ]
//             },
//             {
//                 name: "Safari",
//                 id: "Safari",
//                 data: [
//                     [
//                         "v11.0",
//                         3.39
//                     ],
//                     [
//                         "v10.1",
//                         0.96
//                     ],
//                     [
//                         "v10.0",
//                         0.36
//                     ],
//                     [
//                         "v9.1",
//                         0.54
//                     ],
//                     [
//                         "v9.0",
//                         0.13
//                     ],
//                     [
//                         "v5.1",
//                         0.2
//                     ]
//                 ]
//             },
//             {
//                 name: "Edge",
//                 id: "Edge",
//                 data: [
//                     [
//                         "v16",
//                         2.6
//                     ],
//                     [
//                         "v15",
//                         0.92
//                     ],
//                     [
//                         "v14",
//                         0.4
//                     ],
//                     [
//                         "v13",
//                         0.1
//                     ]
//                 ]
//             },
//             {
//                 name: "Opera",
//                 id: "Opera",
//                 data: [
//                     [
//                         "v50.0",
//                         0.96
//                     ],
//                     [
//                         "v49.0",
//                         0.82
//                     ],
//                     [
//                         "v12.1",
//                         0.14
//                     ]
//                 ]
//             }
//         ]
//     }
// }




