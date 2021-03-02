import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByIdentificationComponent } from './components/search-by-identification/search-by-identification.component';
import { SearchByNameSurnameComponent } from './components/search-by-name-surname/search-by-name-surname.component';
import { SearchBySingleStatusComponent } from './components/search-by-single-status/search-by-single-status.component';
import { ContactabilityComponent } from './contactability.component';

const routes: Routes = [
  { path: '', component: ContactabilityComponent },
  { path: 'search-by-single-status', component: SearchBySingleStatusComponent },
  { path: 'search-by-name-surname', component: SearchByNameSurnameComponent },
  { path: 'search-by-identification', component: SearchByIdentificationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactabilityRoutingModule {}
