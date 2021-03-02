import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactabilityRoutingModule } from './contactability-routing.module';
import { ContactabilityComponent } from './contactability.component';
import { SharedStyleModule } from 'shared/shared-style/shared-style.module';
import { SearchBySingleStatusComponent } from './components/search-by-single-status/search-by-single-status.component';
import { SearchByVariousStatusComponent } from './components/search-by-various-status/search-by-various-status.component';
import { SearchByNameSurnameComponent } from './components/search-by-name-surname/search-by-name-surname.component';
import { SearchByIdentificationComponent } from './components/search-by-identification/search-by-identification.component';

@NgModule({
  declarations: [ContactabilityComponent, SearchBySingleStatusComponent, SearchByVariousStatusComponent, SearchByNameSurnameComponent, SearchByIdentificationComponent],
  imports: [CommonModule, ContactabilityRoutingModule, SharedStyleModule],
})
export class ContactabilityModule {}
