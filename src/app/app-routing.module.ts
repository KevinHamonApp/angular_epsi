import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { DetailsHeroComponent } from './public/details-hero/details-hero.component';
import { HeroesComponent } from './public/heroes/heroes.component';
import { LayoutComponent } from './public/layout/layout.component';
import { LoginComponent } from './public/login/login.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: DashboardComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'hero/:id', component: DetailsHeroComponent},
    { path: 'login', component: LoginComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
