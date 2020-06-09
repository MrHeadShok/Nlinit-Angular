import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentification-service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-verificationmod',
  templateUrl: './verificationmod.component.html',
  styleUrls: ['./verificationmod.component.scss'],
})
export class VerificationmodComponent implements OnInit {

  constructor(public authService: AuthenticationService,
    public modalController: ModalController,
  private router: Router) { }

  ngOnInit() { }
  
  dismissModal() {

    this.modalController.dismiss({
      'dismissed': true
      
    });
    console.log("debugghere")
    this.router.navigate(['login']);
  }

}
