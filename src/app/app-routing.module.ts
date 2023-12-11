import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { GamesComponent } from './games/games.component';
import { ProposComponent } from './propos/propos.component';
import { ActualiteComponent } from './actualite/actualite.component';


const routes: Routes = [
  {path:'',component:AcceuilComponent},
  {path:'login',component:LoginComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'games',component:GamesComponent},
  {path:'propos',component:ProposComponent},
  {path:'Actualite',component:ActualiteComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
