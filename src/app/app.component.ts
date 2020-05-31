import { Component, Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
  
@Injectable()
export class AppComponent {
  public static isTabVisible:boolean = false
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  get getIsTabVisible() {
    return AppComponent.isTabVisible;
  }

  navigateToProjects() {
    this.router.navigate(['projectspage']);
  }

  navigateToprofile() {
    this.router.navigate(['profile']);
  }

}
