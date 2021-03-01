import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByNameSurnameComponent } from './components/search-by-name-surname/search-by-name-surname.component';
import { SearchBySingleStatusComponent } from './components/search-by-single-status/search-by-single-status.component';
import { ContactabilityComponent } from './contactability.component';

const routes: Routes = [
  { path: '', component: ContactabilityComponent },
  { path: 'search-by-single-status', component: SearchBySingleStatusComponent },
  { path: 'search-by-name-surname', component: SearchByNameSurnameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactabilityRoutingModule {}
