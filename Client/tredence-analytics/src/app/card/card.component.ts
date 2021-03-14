import {Component, Input, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ProgressBarMode} from "@angular/material/progress-bar";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  basicDataEntries: any;
  color = 'red';
  constructor() {
  }

  ngOnInit(): void {

  }
  //Returns color based on key type
  getColourBasedOnKey(key) {
    switch (key) {
      case 'New Users':
        return '#9B7EEF';
        break;
      case 'Total Issues':
        return '#2882E4';
        break;
      case 'Open Invoices':
        return '#FFB63A';
        break;
      case 'New Projects':
        return 'red';
        break;
    }
  }

//Returns icon based on key type
  getIconByKey(key) {
    switch (key) {
      case 'New Users':
        return `<i class="fa fa-user" aria-hidden="true"></i>`;
        break;
      case 'Total Issues':
        return `<i class="fa fa-file-o" aria-hidden="true"></i>`;
        break;
      case 'Open Invoices':
        return `<i class="fa fa-info" aria-hidden="true"></i>`;
        break;
      case 'New Projects':
        return `<i class="fa fa-folder" aria-hidden="true"></i>`;
        break;

    }
  }

}
