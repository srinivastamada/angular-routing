import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { UserComponent } from './user.component';
import { UserRoutes } from './user.routes';

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [RouterModule.forChild(UserRoutes), CommonModule, ComponentsModule]
})
export class UserModule {}
