import { Component, OnInit } from '@angular/core';
import { AddProjectComponent } from 'src/app/components/add-project/add-project.component';
import { ModalController, AnimationController, IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';




@Component({
  selector: 'app-projectspage',
  templateUrl: './projectspage.page.html',
  styleUrls: ['./projectspage.page.scss'],
})
export class ProjectspagePage implements OnInit {

  taskName: any = ''; 
  taskList = []; 

  constructor(private routerOutlet: IonRouterOutlet,public modalController: ModalController, private router: Router, public animationCtrl: AnimationController) { }

  ngOnInit() {
    console.log("DEbug: ProjectspagePage");
  }


  ionViewWillEnter() {
    AppComponent.isTabVisible = true;
  }

  navigateToDashboard() {
    this.router.navigate(['tabs/tab1'])
    console.log("Directed to dashboard")
    
  }


  async addpPoject() {
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




