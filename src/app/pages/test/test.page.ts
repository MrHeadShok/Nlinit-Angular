import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { grid } from './data';


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  single: any[];
  view: any[] = [500, 400];

  showLegend: boolean = true;
  showLabels: boolean = true;


  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  constructor() { 
    Object.assign(this, { grid });
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
