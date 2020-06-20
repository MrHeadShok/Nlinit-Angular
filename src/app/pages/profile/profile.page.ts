import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Chart } from 'chart.js';




import { UserfirestoreService } from 'src/app/services/userstore/userfirestore.service';

class User {
  constructor (public id: string,
    public isEdit: boolean,
    public fullname: string,
    public role: string,
    public email: string,
  public password: string) {
    }
  
}
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

 

  @ViewChild('doughnutCanvas', { static: true }) doughnutCanvas; //add to viewchild
  
  doughnutChart: any; //add your doghnut :)
  
  constructor(public userService: UserfirestoreService ) {
    
   }
  
  ionViewWillEnter() {
    AppComponent.isTabVisible = true;
    
  }
  
  //userInfo
  userList = [];
  userData: User;

 

  ngOnInit() { 
    this.doughnutChartMethod(); //to be displayed when your page is loaded

 

    this.userService.read_user().subscribe(data => { //import db (web service subscribe) 
      this.userList = data.map(e => {
        let id = e.payload.doc.id;
        let isEdit = false;
        let fullname = e.payload.doc.data()['fullname'];
        let role = e.payload.doc.data()['role'];
        let email = e.payload.doc.data()['email'];
        let password = e.payload.doc.data()['password'];
        
        return new User(id, isEdit, fullname, role,email,password);

      })
      if (this.userList.length > 0){
        this.userData = this.userList[0];  
      }
      
      console.log("import data")
      console.log(this.userList);
    })

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