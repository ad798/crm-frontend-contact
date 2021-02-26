import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [ProductsComponent, AddProductComponent, ProductsListComponent, ProductDetailsComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
