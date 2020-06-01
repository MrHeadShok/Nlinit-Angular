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
  @ViewChild('pieCanvas', { static: true }) pieCanvas;

  doughnutChart: any;
  pieChart: any;

  constructor() {
    
   }
  
  ionViewWillEnter() {
    AppComponent.isTabVisible = true;
    
}

  ngOnInit() { 
    this.doughnutChartMethod();
    this.pieChartMethod();


  }

  pieChartMethod() {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    

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