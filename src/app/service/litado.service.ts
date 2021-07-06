import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon, Pokemons, PokemonType } from '../interface/pokemon.interface';

const BaseUrl = environment.BaseUrl;
@Injectable({
  providedIn: 'root'
})
export class LitadoService {


  constructor(private http: HttpClient) { }

  obtenerPokemonTipo() {
    const url = `${BaseUrl}/type/`
    return this.http.get<PokemonType[]>(url);
  }
  listaPokemons(tipo: string) {
    const url = `${BaseUrl}/type/${tipo}`
    return this.http.get<Pokemon[]>(url);

  }
  listarPokemons(name: string) {

    const url = `${BaseUrl}/pokemon/${name}`
    return this.http.get<Pokemons[]>(url);
  }
}
