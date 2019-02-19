import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [SettingsComponent, DashboardComponent, ProductsComponent, UserComponent]
})
export class HomeModule { }
