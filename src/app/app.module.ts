import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './public/heroes/heroes.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { DetailsHeroComponent } from './public/details-hero/details-hero.component';
import { ItemHerosComponent } from './components/item-heros/item-heros.component';
import { LayoutComponent } from './public/layout/layout.component';
import { AdminLayoutComponent } from './protected/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './public/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogFormComponent } from './components/log-form/log-form.component';
import { BackofficeComponent } from './protected/backoffice/backoffice.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    DetailsHeroComponent,
    ItemHerosComponent,
    LayoutComponent,
    AdminLayoutComponent,
    LoginComponent,
    LogFormComponent,
    BackofficeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
