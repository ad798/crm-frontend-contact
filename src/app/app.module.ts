import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationComponent } from './shared/navigation/navigation.component';
import {SharedStyleModule } from 'shared/shared-style/shared-style.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedStyleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
