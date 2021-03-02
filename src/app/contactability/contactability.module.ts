import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactabilityRoutingModule } from './contactability-routing.module';
import { ContactabilityComponent } from './contactability.component';
import { SharedStyleModule } from 'shared/shared-style/shared-style.module';
import { SearchBySingleStatusComponent } from './components/search-by-single-status/search-by-single-status.component';
import { SearchByNameSurnameComponent } from './components/search-by-name-surname/search-by-name-surname.component';
import { SearchByIdentificationComponent } from './components/search-by-identification/search-by-identification.component';
import { SearchByCampaignIdClientIdComponent } from './components/search-by-campaign-id-client-id/search-by-campaign-id-client-id.component';
import { SearchByPhoneComponent } from './components/search-by-phone/search-by-phone.component';

@NgModule({
  declarations: [
    ContactabilityComponent,
    SearchBySingleStatusComponent,
    SearchByNameSurnameComponent,
    SearchByIdentificationComponent,
    SearchByCampaignIdClientIdComponent,
    SearchByPhoneComponent
  ],
  imports: [CommonModule, ContactabilityRoutingModule, SharedStyleModule],
})
export class ContactabilityModule {}
