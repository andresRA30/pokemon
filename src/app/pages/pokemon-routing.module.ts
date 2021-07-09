import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pokemon-list/listado.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListadoComponent
  },
  {
    path: 'info/:id',
    component: PokemonInfoComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
