import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactabilityRoutingModule } from './contactability-routing.module';
import { ContactabilityComponent } from './contactability.component';
import { SharedStyleModule } from 'shared/shared-style/shared-style.module';
import { SearchBySingleStatusComponent } from './components/search-by-single-status/search-by-single-status.component';
import { SearchByNameSurnameComponent } from './components/search-by-name-surname/search-by-name-surname.component';

@NgModule({
  declarations: [
    ContactabilityComponent,
    SearchBySingleStatusComponent,
    SearchByNameSurnameComponent,
  ],
  imports: [CommonModule, ContactabilityRoutingModule, SharedStyleModule],
})
export class ContactabilityModule {}
