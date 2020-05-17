import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,
    public toastController: ToastController) { }
  

  ngOnInit() {
  }

  navigateToSignupPage(){
    this.router.navigate(['signup'])
    console.log("Signup pressed")
  }


  async navigateToHome(){
    this.router.navigate(['projectspage'])
    const toast = await this.toastController.create({
      message: '   You are  Successfully logged in!   ',
      duration: 2000
    });
    toast.present();
  }

}
