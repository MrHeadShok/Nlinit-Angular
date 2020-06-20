import { Component, Injectable, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/authentification-service';

import { UserfirestoreService } from './services/userstore/userfirestore.service';
import { PopoverController } from '@ionic/angular';
import { NotificationsComponent } from './components/notifications/notifications.component';




class User{
  constructor(public id: string,
    public isEdit: boolean,
    public fullname: string,
    public role: string) {
    
  }
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
  
@Injectable()
export class AppComponent implements OnInit {
  public static isTabVisible:boolean = false
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public authService: AuthenticationService,
    private navCtrl: NavController,
    private userService: UserfirestoreService,
    public notification: PopoverController
  ) {
    this.initializeApp();
  }
  ngOnInit() {
    this.userService.read_user().subscribe(data => { //import db (web service subscribe) 
      this.userList = data.map(e => {
        let id = e.payload.doc.id;
        let isEdit = false;
        let fullname = e.payload.doc.data()['fullname'];
        let role = e.payload.doc.data()['role'];


        return new User(id, isEdit, fullname, role);

      })
      if (this.userList.length > 0) {
        this.userData = this.userList[0];
      }

      console.log("import data")
      console.log(this.userList);
    })
  }

  
  userList = [];
  userData: User;

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

  navigateToMessages() {
    this.router.navigate(['messages']);
  }
 
  navigateToStats() {
    this.router.navigate(['stats']);
  }

  navigateToSettings() {
    this.router.navigate(['settings'])
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('login');
      })
      .catch(error => {
        console.log(error);
      })
  }



  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }



  async presentPopover(ev: any) {
    const popover = await this.notification.create({
      component: NotificationsComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
