import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {

  projectname: any = ''; // Entered Text
  projectlist = []; // Array to store tasks




  constructor(public modalController: ModalController) { }

  ngOnInit() { }
  
  savePoject() {
    console.log("parameters saved")
  }

  dismissModal() {
    this.modalController.dismiss({
    'dismissed': true
  });
  }

  




}


