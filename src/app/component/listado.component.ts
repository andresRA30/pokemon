import { Component, OnInit } from '@angular/core';
import { LitadoService } from '../service/litado.service';
import { Pokemon, PokemonType } from '../interface/pokemon.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    tipo: ['', [Validators.required]]
  })
  pokemonTypes: PokemonType[] = [];
  pokemons: Pokemon[] = [];
  constructor(private listadoService: LitadoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.obtenerTipo();
  }

  obtenerTipo() {
    this.listadoService.obtenerPokemonTipo()
      .subscribe((pokemonTypes: any) => {
        this.pokemonTypes = pokemonTypes.results;
        console.log(this.pokemonTypes);
      })

  }
  buscarPokemons() {
    const { tipo } = this.miFormulario.value

    this.listadoService.listaPokemons(tipo)
      .subscribe((resp: any) => {

        for (let i = 0; i < resp.pokemon.length; i++) {


          this.listadoService.listarPokemons(resp.pokemon[i].pokemon.name)
            .subscribe((resp: any) => {
              this.pokemons[i] = resp;

            })
        }




      })



  }

}
