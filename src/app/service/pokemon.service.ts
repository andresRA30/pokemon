import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const BaseUrl = environment.BaseUrl;
@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor(private http: HttpClient) { }

  listarPokemons(offset: number) {
    const url = `${BaseUrl}/pokemon?limit=6&offset=${offset}`
    return this.http.get(url)
      .pipe(
        map((resp: any) => resp.results)
      );
  }

  listarPokemonTipos() {
    const url = `${BaseUrl}/type/`
    return this.http.get(url);
  }
  obtenerPokemonTipo(tipo: string) {
    const url = `${BaseUrl}/type/${tipo}`
    return this.http.get(url)
      .pipe(
        map((resp: any) => resp.pokemon)
      );

  }
  obtenerPokemons(name: string) {

    const url = `${BaseUrl}/pokemon/${name}`
    return this.http.get(url);
  }


}
