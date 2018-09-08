import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SettingsComponent, DashboardComponent, ProductsComponent]
})
export class HomeModule { }
