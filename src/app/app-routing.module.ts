import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'campaigns',
    loadChildren: () =>
      import('./campaigns/campaigns.module').then((m) => m.CampaignsModule),
  },
  {
    path: 'possible-clients',
    loadChildren: () =>
      import('./possible-clients/possible-clients.module').then(
        (m) => m.PossibleClientsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
