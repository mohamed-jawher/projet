import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { GamesComponent } from './games/games.component';
import { ProposComponent } from './propos/propos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BodyComponent } from './body/body.component';
import { ActualiteComponent } from './actualite/actualite.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginComponent,
    ConnexionComponent,
    GamesComponent,
    ProposComponent,
    BodyComponent,
    ActualiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
