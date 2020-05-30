import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,
    public toastController: ToastController) { }
  

  ngOnInit() {
    console.log("DEbug: ProjectspagePage");
  }

  ionViewWillEnter() {
    AppComponent.isTabVisible = false;
    console.log("debug  ionViewWillEnter")
  }

  navigateToSignupPage(){
    this.router.navigate(['signup'])
    console.log("Signup pressed")
  }


  async navigateToHome() {
    
    let user = "";
    let pass = "";
    console.log("debug _ Login ")

    this.router.navigate(['projectspage'])
    const toast = await this.toastController.create({
      message: '   You are  Successfully logged in!   ',
      duration: 2000
    });
    toast.present();
  }

}
