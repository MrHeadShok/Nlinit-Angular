import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from "../../shared/authentification-service";
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public toastController: ToastController,public router: Router, public authService: AuthenticationService ) { }
 

  ngOnInit() {
  }

  navigateToLoginPage(){
    this.router.navigate(['login'])
    console.log("redirected to login")
  }

  signUp(fullname, email, password, role) {
    this.authService.RegisterUser(email.value, password.value, role.value, fullname.value)
      .then(async (res) => {
        this.authService.SendVerificationMail() //verification email

        console.log("1st condition")
        this.router.navigate(['login'])
        
        const toast = await this.toastController.create({
          animated: true,
          header: 'Account created successfully!',
          message: 'Check your inbox for a verification email! Click the button to resend.',
          duration: 6000,
          position: 'top',
          buttons:[{
            side: 'end',
            icon: 'refresh-circle-outline',
            text: 'Resend',
            handler: () => {
              this.authService.SendVerificationMail()
            }
          }]
        });
        toast.present();
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
