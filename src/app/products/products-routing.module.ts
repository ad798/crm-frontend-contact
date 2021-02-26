import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    component: ProductsComponent,
    pathMatch: 'full',
  },
  { path: 'list', component: ProductsListComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'add', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
