import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StdinfoPageRoutingModule } from './stdinfo-routing.module';

import { StdinfoPage } from './stdinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StdinfoPageRoutingModule
  ],
  declarations: [StdinfoPage]
})
export class StdinfoPageModule {}
