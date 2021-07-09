import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../service/pokemon.service';
import { Pokemon } from '../../interface/pokemon.interface';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styles: [
  ]
})
export class PokemonInfoComponent implements OnInit {

  pokemon!: Pokemon;
  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.obtenerInfoPokemon(id);
    })
  }
  obtenerInfoPokemon(name: string) {
    console.log(name);
    this.pokemonService.obtenerPokemons(name)
      .subscribe((resp: any) => {
        this.pokemon = resp;
        console.log(this.pokemon);
      })
  }
  volver() {
    this.router.navigateByUrl('list')
  }
}
