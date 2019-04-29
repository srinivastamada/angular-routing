import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { SettingsComponent } from './settings.component';
import { SettingsRoutes } from './settings.routes';

@NgModule({
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  imports: [
    RouterModule.forChild(SettingsRoutes),
    CommonModule,
    ComponentsModule
  ]
})
export class SettingsModule {}
