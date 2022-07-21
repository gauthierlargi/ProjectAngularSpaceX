import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexShowPlanetsComponent } from './index-show-planets/index-show-planets.component';

// cet page et pour le systeme de route pour rechargé les components avec le click du changement de l'url sans passé par le serveur
// + possitionné le <router-outlet> dans le compossant qui en a besoin
// "routerLink" pour appele le component dans un lien (<a>/<li>)
// mise en valeur des lien actif avec le "routerLinkActive='active'"

const routes: Routes = [


  { path: '', component: HomepageComponent },
  { path: 'planets', component: IndexShowPlanetsComponent },
  // { path: 'cars', component: carspageComponent },
  // { path: 'users', component: usersComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
