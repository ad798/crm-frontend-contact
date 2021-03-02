import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListByCampaignComponent } from './components/list-by-campaign/list-by-campaign.component';
import { SearchByCampaignIdClientIdComponent } from './components/search-by-campaign-id-client-id/search-by-campaign-id-client-id.component';
import { SearchByEmailComponent } from './components/search-by-email/search-by-email.component';
import { SearchByIdentificationComponent } from './components/search-by-identification/search-by-identification.component';
import { SearchByNameSurnameComponent } from './components/search-by-name-surname/search-by-name-surname.component';
import { SearchByPhoneComponent } from './components/search-by-phone/search-by-phone.component';
import { SearchBySingleStatusComponent } from './components/search-by-single-status/search-by-single-status.component';
import { ContactabilityComponent } from './contactability.component';

const routes: Routes = [
  { path: '', component: ContactabilityComponent },
  { path: 'search-by-single-status', component: SearchBySingleStatusComponent },
  { path: 'search-by-name-surname', component: SearchByNameSurnameComponent },
  { path: 'search-by-identification', component: SearchByIdentificationComponent },
  { path: 'search-by-campaign-id-client-id', component: SearchByCampaignIdClientIdComponent },
  { path: 'search-by-phone', component: SearchByPhoneComponent },
  { path: 'search-by-email', component: SearchByEmailComponent },
  { path: 'search-by-campaign', component: ListByCampaignComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactabilityRoutingModule {}
