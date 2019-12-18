import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StdinfoPage } from './stdinfo.page';

const routes: Routes = [
  {
    path: '',
    component: StdinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StdinfoPageRoutingModule {}
