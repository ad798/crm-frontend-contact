import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactabilityRoutingModule } from './contactability-routing.module';
import { ContactabilityComponent } from './contactability.component';
import { SharedStyleModule } from 'shared/shared-style/shared-style.module';

@NgModule({
  declarations: [ContactabilityComponent],
  imports: [CommonModule, ContactabilityRoutingModule, SharedStyleModule],
})
export class ContactabilityModule {}
