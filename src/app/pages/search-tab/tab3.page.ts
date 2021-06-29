import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { Add2teamComponent } from 'src/app/components/add2team/add2team.component';
import { AnimationController } from '@ionic/angular';

import { AppComponent } from 'src/app/app.component';
import { UserfirestoreService } from 'src/app/services/userstore/userfirestore.service';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public animationCtrl: AnimationController, public popoverCtrl: PopoverController) { }

  async sendInv(ev: any) {

    const popover = await this.popoverCtrl.create({
      component: Add2teamComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

}


