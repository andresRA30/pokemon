import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { Pokemon, PokemonType } from '../../interface/pokemon.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
   
    `
  ]
})
export class ListadoComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    tipo: ['', [Validators.required]]
  })
  pokemonTypes: PokemonType[] = [];
  pokemons: Pokemon[] = [];
  cargando: boolean = false;
  cargarMasPokemons: number = 0;
  constructor(private pokemonService: PokemonService, private fb: FormBuilder, private router: Router) { }


  ngOnInit(): void {
    this.obtenerTipo();
    this.obtenerPokemons();

  }
  obtenerPokemons() {
    this.pokemonService.listarPokemons(this.cargarMasPokemons)
      .subscribe((pokemons: any) => {

        pokemons.forEach((poke: any) => {
          this.obtenerFoto(poke.name)
        });
      })

  }
  cargarMas() {
    this.cargarMasPokemons = this.cargarMasPokemons + 6;
    this.obtenerPokemons();
  }
  obtenerTipo() {

    this.pokemonService.listarPokemonTipos()
      .subscribe((pokemonTypes: any) => {
        this.pokemons = [];
        this.pokemonTypes = pokemonTypes.results;

      })

  }
  onChange(tipo: any) {
    this.cargando = true;
    if (!tipo) {
      this.pokemons = [];
      this.cargarMasPokemons = 0;
      return this.obtenerPokemons();
    }

    this.pokemons = [];
    this.pokemonService.obtenerPokemonTipo(tipo)
      .subscribe((pokemon: any) => {
        pokemon.forEach((p: any) => {
          this.obtenerFoto(p.pokemon.name)


        });

      })
  }
  obtenerFoto(name: string) {
    this.pokemonService.obtenerPokemons(name)
      .subscribe((resp: any) => {
        this.cargando = false;

        this.pokemons.push(resp);
      })
  }
  infoPokemon(pokemonNombre: string) {
    this.router.navigateByUrl(`info/${pokemonNombre}`);
  }

}
