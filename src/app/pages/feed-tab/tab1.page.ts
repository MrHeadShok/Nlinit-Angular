import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddProjectComponent } from '../../components/add-project/add-project.component';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController: ModalController) {}
 
  async addpPoject() {
    const modal = await this.modalController.create({
      component: AddProjectComponent
    });
    return await modal.present();
    console.log("modal added!")
  }


}
