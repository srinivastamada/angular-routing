import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { SignupComponent } from './signup.component';
import { SignupRoutes } from './signup.routes';

@NgModule({
  declarations: [SignupComponent],
  exports: [SignupComponent],
  imports: [RouterModule.forChild(SignupRoutes), CommonModule, ComponentsModule]
})
export class SignupModule {}
