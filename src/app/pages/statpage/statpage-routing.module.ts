import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatpagePage } from './statpage.page';

const routes: Routes = [
  {
    path: '',
    component: StatpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatpagePageRoutingModule {}
