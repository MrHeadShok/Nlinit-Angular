import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

//created componenets
import { AddProjectComponent } from './components/add-project/add-project.component';
import { Add2teamComponent } from './components/add2team/add2team.component';
import { VerificationmodComponent } from './components/verificationmod/verificationmod.component';
import { NotificationsComponent } from './components/notifications/notifications.component';


//CameraUpload + cam picker
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';



//firebase related impors


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';





@NgModule({
  declarations: [AppComponent, NotificationsComponent, AddProjectComponent, Add2teamComponent, VerificationmodComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [AddProjectComponent, NotificationsComponent, Add2teamComponent, VerificationmodComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule],

  providers: [
    StatusBar, AngularFirestoreModule,
    Camera, File,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
