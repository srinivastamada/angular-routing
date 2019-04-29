import { ForgotRoutes } from './forgot.routes';
import { ForgotComponent } from './forgot.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ForgotComponent],
  exports:[ForgotComponent],
  imports: [
    RouterModule.forChild(ForgotRoutes),
    CommonModule,
    ComponentsModule
  ]
})
export class ForgotModule { }
