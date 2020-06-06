import { Component, OnInit, ViewChild } from '@angular/core';

import { AppComponent } from 'src/app/app.component';


import { Router } from "@angular/router";
import { AuthenticationService } from "../../shared/authentification-service";


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  
  @ViewChild('doughnutCanvas', { static: true }) doughnutCanvas;
  
  

  constructor(public authService: AuthenticationService,
    public router: Router) {

  }

  ionViewWillEnter() {
    AppComponent.isTabVisible = true;

  }

  ngOnInit() {

  }





  
}
