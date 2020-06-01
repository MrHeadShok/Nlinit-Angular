import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

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
          data: [100,30 ],
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