import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ContatoComponent } from "./contato/contato.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent },
  {path: 'contato', component: ContatoComponent },
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
