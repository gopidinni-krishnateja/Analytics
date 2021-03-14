import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input()
  dataSet:any;
  @Input()
  labelsDataSet:any;
  @Input()
  chartType:any;
  @Output()
  closeChart = new EventEmitter();
  public lineChartOptions: (ChartOptions ) = {
    responsive: true,
  };
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label;
  public lineChartColors: Color[];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  constructor() { }

  ngOnInit(): void {
    if(this.dataSet){
      this.lineChartData = this.dataSet;
      this.lineChartLabels = this.labelsDataSet;
    }
  }

  close(type){
    this.closeChart.emit(type);
  }

}
