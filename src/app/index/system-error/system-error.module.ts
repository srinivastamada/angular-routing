import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { SystemErrorComponent } from './system-error.component';
import { SystemErrorRoutes } from './system-error.routes';

@NgModule({
  declarations: [SystemErrorComponent],
  exports: [SystemErrorComponent],
  imports: [
    RouterModule.forChild(SystemErrorRoutes),
    CommonModule,
    ComponentsModule
  ]
})
export class SystemErrorModule {}
