import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [NameComponent, LogoComponent, ButtonComponent],
  exports: [NameComponent, LogoComponent, ButtonComponent],
  imports: [CommonModule]
})
export class ComponentsModule {}
