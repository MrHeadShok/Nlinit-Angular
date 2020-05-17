import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectspagePage } from './projectspage.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectspagePageRoutingModule {}
