import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  
  @ViewChild('doughnutCanvas', { static: true }) doughnutCanvas;
  

  doughnutChart: any;
  

  constructor() {

  }

  ionViewWillEnter() {
    AppComponent.isTabVisible = true;

  }

  ngOnInit() {
    this.doughnutChartMethod();
    


  }


  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Total projects', 'Currently working on'],
        datasets: [{
          label: '# of Votes',
          data: [100, 30],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          hoverBackgroundColor: [

            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }


  
}
