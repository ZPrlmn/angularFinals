import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { LayoutComponent } from './layout.component';
import { TableComponent } from '../components/table/table.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
