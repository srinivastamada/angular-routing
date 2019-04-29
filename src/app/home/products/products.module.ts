import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { ProductsComponent } from './products.component';
import { ProductsRoutes } from './products.routes';

@NgModule({
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
  imports: [
    RouterModule.forChild(ProductsRoutes),
    CommonModule,
    ComponentsModule
  ]
})
export class ProductsModule {}
