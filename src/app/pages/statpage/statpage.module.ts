import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatpagePageRoutingModule } from './statpage-routing.module';

import { StatpagePage } from './statpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatpagePageRoutingModule
  ],
  declarations: [StatpagePage]
})
export class StatpagePageModule {}
