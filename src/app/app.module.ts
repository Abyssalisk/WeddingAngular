import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeEspanolComponent } from './home-espanol/home-espanol.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RsvpEspanolComponent } from './rsvp-espanol/rsvp-espanol.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeEspanolComponent,
    RsvpComponent,
    RsvpEspanolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
