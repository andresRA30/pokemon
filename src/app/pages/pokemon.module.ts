import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';


@NgModule({
  declarations: [
    PokemonInfoComponent,

  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
  ]
})
export class PokemonModule { }
