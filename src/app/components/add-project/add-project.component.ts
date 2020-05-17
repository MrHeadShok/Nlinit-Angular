import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Toast } from '@capacitor/core';

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
  
  addpPoject() {
    if (this.projectname.length > 0) {
      let task = this.projectname;
      this.projectlist.push(task);
      this.projectname = '';
      console.log("Project added")
    } else {
      console.log("Invalid")
    }
  }

  deleteTask(index) {
    this.projectlist.splice(index, 1);
  }




  onClose(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  
}


