import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConnexionComponent } from './app-connexion/app-connexion.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AppConnexionComponent,
    AppMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
