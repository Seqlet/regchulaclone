import { SelectInputComponent } from './components/select-input/select-input.component';
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { TabsComponent } from "./components/tabs/tabs.component";
import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./components/table/table.component";
import { CourseInputComponent } from "./components/course-input/course-input.component";

@NgModule({
  declarations: [TableComponent, TabsComponent, CourseInputComponent, SelectInputComponent],
  imports: [CommonModule, FormsModule, IonicModule.forRoot(), RouterModule],
  exports: [TableComponent, TabsComponent, CourseInputComponent]
})
export class CoreModule {}
