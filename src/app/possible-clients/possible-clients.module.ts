import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PossibleClientsRoutingModule } from './possible-clients-routing.module';
import { PossibleClientsComponent } from './possible-clients.component';


@NgModule({
  declarations: [PossibleClientsComponent],
  imports: [
    CommonModule,
    PossibleClientsRoutingModule
  ]
})
export class PossibleClientsModule { }
