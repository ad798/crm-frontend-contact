import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactabilityComponent } from './contactability.component';

const routes: Routes = [{ path: '', component: ContactabilityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactabilityRoutingModule { }
