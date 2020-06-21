import { Component, OnInit } from '@angular/core';

import { ModalController, AnimationController, IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';




import { AddProjectComponent } from 'src/app/components/add-project/add-project.component';
import { ProjectstoreService } from 'src/app/services/projectstore/projectstore.service';


class Project{
  constructor(public id: string,
    public pend: string,
    public pinfo: string,
    public pname: string,
    public pstart: string 

 ) {
    
  }
}

@Component({
  selector: 'app-projectspage',
  templateUrl: './projectspage.page.html',
  styleUrls: ['./projectspage.page.scss'],
})
export class ProjectspagePage implements OnInit {

  taskName: any = ''; 
  taskList = []; 

  constructor(private routerOutlet: IonRouterOutlet, public modalController: ModalController, private router: Router, public animationCtrl: AnimationController,
    private projectService: ProjectstoreService) { }

  
  projectList = [];
  projectData: Project;
  
  ngOnInit() {
    
    this.projectService.read_project().subscribe(data =>
    {
      this.projectList = data.map(e => {
        let id = e.payload.doc.id;
        let pend = e.payload.doc.data()['pend'];
        let pinfo = e.payload.doc.data()['pinfo'];
        let pstart = e.payload.doc.data()['pstart'];
        let pname = e.payload.doc.data()['pname'];

        return new Project(id, pend, pinfo, pname, pstart);
      })
      for (let i = 0; i <= this.projectList.length;i++) {
        this.projectData = this.projectList[i];
      }

      console.log(this.projectList)
      
  
    })
  }


  ionViewWillEnter() {
    AppComponent.isTabVisible = true;
  }

  navigateToDashboard() {
    this.router.navigate(['tabs/tab1'])
    
    
  }


  async addpPoject() { // displayModal
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction('reverse');
    }

    const modal = await this.modalController.create({
      component: AddProjectComponent,
      enterAnimation,
      leaveAnimation
    });
    return await modal.present();
  }


}




