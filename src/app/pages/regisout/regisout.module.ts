import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisoutPageRoutingModule } from './regisout-routing.module';

import { RegisoutPage } from './regisout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisoutPageRoutingModule
  ],
  declarations: [RegisoutPage]
})
export class RegisoutPageModule {}
