import { Component, OnInit } from '@angular/core';
import { AddProjectComponent } from 'src/app/components/add-project/add-project.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-projectspage',
  templateUrl: './projectspage.page.html',
  styleUrls: ['./projectspage.page.scss'],
})
export class ProjectspagePage implements OnInit {

  taskName: any = ''; 
  taskList = []; 

  constructor(public modalController: ModalController ) { }

  ngOnInit() {
  }

  async addpPoject() {
    const modal = await this.modalController.create({
      component: AddProjectComponent
    });
    return await modal.present();
    console.log("modal added!")
  }


  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = '';
    }
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

}
