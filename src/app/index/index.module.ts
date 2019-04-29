import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { IndexComponent } from './index.component';
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ComponentsModule],
  declarations: [IndexComponent],
  exports: [IndexComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule {}
