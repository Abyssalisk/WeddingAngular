import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeEspanolComponent} from './home-espanol/home-espanol.component';
import {HomeComponent} from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RsvpEspanolComponent } from './rsvp-espanol/rsvp-espanol.component';
import { RegistryComponent } from './registry/registry.component';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'home-espanol', component: HomeEspanolComponent},
  { path: 'rsvp', component: RsvpComponent},
  { path: 'rsvp-espanol', component: RsvpEspanolComponent},
  { path: 'registry', component: RegistryComponent},
  { path: 'wedding-party', component: WeddingPartyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, HomeEspanolComponent, RsvpComponent, RsvpEspanolComponent, RegistryComponent, WeddingPartyComponent]