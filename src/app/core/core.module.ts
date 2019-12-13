import { RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './components/tabs/tabs.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [TableComponent, TabsComponent],
  imports: [CommonModule, FormsModule, IonicModule.forRoot(), RouterModule],
  exports: [TableComponent, TabsComponent]
})
export class CoreModule {}
