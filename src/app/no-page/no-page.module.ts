import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NoPageComponent } from './no-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NoPageComponent],
  exports: [NoPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NoPageModule {}
