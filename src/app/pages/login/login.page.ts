import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';

import { AuthenticationService } from 'src/app/shared/authentification-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,
    public toastController: ToastController,
    public authService: AuthenticationService) { }
  

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


  async logIn(email, password) {
    console.log("in")
    
    this.authService.SignIn(email.value, password.value)
      .then(async (res) => {
        if (this.authService.isEmailVerified==true) {
          this.router.navigate(['projectspage'])
          const toast = await this.toastController.create({
            message: 'Successfully logged in!   ',
            duration: 2000
          });
          toast.present();
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })

    
   
  }

}
