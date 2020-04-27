import { Component, OnInit, Input } from '@angular/core';
import * as Chart from 'chart.js';
import { Data } from '../data.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }
  title = 'app';
  @Input() recData: Data[] = [];


  chartOptions = {
    responsive: true,
  };

  myColors = [
    {
      backgroundColor: 'rgba(92, 219, 149, .1)',
      borderColor: '#5cdb95',
      pointBackgroundColor: '#5cdb95',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    }
    // ...colors for additional data sets
  ];

  dataarr: number[] = [];

  chartData: any[] = [];
  chartLabels: string[] = [];



  ngOnInit() {
    // tslint:disable-next-line: forin
    for (const key in this.recData) {
      this.dataarr.push(this.recData[key].Confirmed);
      this.chartLabels.push(this.recData[key].date[0]);
    }
    this.chartData = [{ data: [...this.dataarr], label: 'Confirmed' }];
    // console.log(this.dataarr, this.chartLabels, this.chartData);

  }

}
