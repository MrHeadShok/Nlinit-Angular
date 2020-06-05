import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add2team',
  templateUrl: './add2team.component.html',
  styleUrls: ['./add2team.component.scss'],
})
export class Add2teamComponent implements OnInit {

  constructor( public mc: ModalController) { }

  ngOnInit() {}


  savePoject() {
    console.log("Request sent")
  }

  dismissModal() {
    this.mc.dismiss({
      'dismissed': true
    });
  }
}
