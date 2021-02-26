import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PossibleClientsComponent } from './possible-clients.component';

const routes: Routes = [{ path: '', component: PossibleClientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PossibleClientsRoutingModule { }
