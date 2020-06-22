import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from 'src/app/principal/principal.component';
import { WorldComponent } from 'src/app/world/world.component';
import { CombatComponent } from './combat/combat.component';


//basicamente, import los ts component de los html que quiero ir, path es el nombre de la url
//comonent debe ser el del importado, el ultimo redireccina por default alli

const routes: Routes = [
  {path: 'menu', component: PrincipalComponent },
  {path: 'menu/mundo', component: WorldComponent },
  {path: 'menu/combate', component: CombatComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'menu'},
];

export const app_routing = RouterModule.forRoot(routes, {useHash:true})
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
