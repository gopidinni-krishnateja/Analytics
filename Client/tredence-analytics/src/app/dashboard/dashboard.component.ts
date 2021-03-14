// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {WebRequestService} from "../Services/web-request.service";
import * as $ from 'jquery';

// @ts-ignore
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private request:WebRequestService) { }
  public data:any;
  chartData3: any;
  basicDataEntries = {};
  areaX=[];
  areaY=[];
  xLengths=[];
  yLengths = [];
  yYLengths = [];
  yXLengths = [];
  areaContent = [];
  salesLabels = [];
  iphoneData =[];
  ipodData = [];
  ipadData =[];
  salesData = [];
  areaChartName:String="";
  salesChartName:String="";

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
 //      Making an API request to get chords information
    this.request.getAllData().then((response)=>{
     this.data =response;
      Object.entries(this.data[0]).map(
        ([key, value]) => {
          switch (key) {
            case 'New Users':
              this.basicDataEntries[key] = value;
              break;
            case 'Total Issues':
              this.basicDataEntries[key] = value;
              break;
            case 'Open Invoices':
              this.basicDataEntries[key] = value;
              break;
            case 'New Projects':
              this.basicDataEntries[key] = value;
              break;

          }
        })
    });


     //Making an API request to get area information

    this.request.getAreaData().then((response)=>{
      this.areaX =response[0]['x-area'];
      this.areaY =response[0]['y-area'];
      this.areaX.map((key)=> {
        this.xLengths.push(key['length']);
        this.yLengths.push(key['width']);
      });
      this.areaY.map((key)=> {
        this.yXLengths.push(key['length']);
        this.yYLengths.push(key['width']);
      });
      this.areaContent = [
        { data: this.yLengths, label: 'Series X' ,
          borderColor: false, backgroundColor: '#8296BB'
        },
        { data: this.yYLengths, label: 'Series Y',
          borderColor: false,backgroundColor: '#FEC9D3', },
      ];
      this.areaChartName ='Area Chart'
    });

    //Making an API request to sale information
    this.request.getSalesData().then((resp)=>{
      if(resp[0]['sales'].length>0){
        resp[0]['sales'].map((eachValue)=>{
          if(!this.salesLabels.includes(eachValue['year'])){
            this.salesLabels.push(eachValue['year'])
          }
          switch (eachValue['type']) {
            case 'iphone':
             this.iphoneData.push(eachValue['sale']);
             break;
            case 'ipod':
              this.ipodData.push(eachValue['sale']);
              break;
            case 'ipad':
              this.ipadData.push(eachValue['sale']);
              break;
          }
        })
      }
      this.salesData.push({data:this.iphoneData,label:'iPhone',fill: false,borderColor: "#26C6DA"});
      this.salesData.push({data:this.ipadData,label:'iPad',fill: false,borderColor: "#FC4B6C"});
      this.salesData.push({data:this.ipodData,label:'iPod',fill: false,borderColor: "#398BF7"});
      this.salesChartName = "Yearly Sales"
    })


  }
  /*
    Close the displaying chart based on type
   */
  closeChart(type){
    switch (type) {
      case 'Yearly Sales':
        this.salesData = [];
        break;
      case 'Area Chart':
        this.areaContent = [];
        break;
    }
  }

}
