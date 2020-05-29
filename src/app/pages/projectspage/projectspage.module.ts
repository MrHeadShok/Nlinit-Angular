import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectspagePageRoutingModule } from './projectspage-routing.module';

import { ProjectspagePage } from './projectspage.page';





@NgModule({
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectspagePageRoutingModule
  ],
  declarations: [ProjectspagePage ]
})
export class ProjectspagePageModule {}
