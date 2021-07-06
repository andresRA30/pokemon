export interface Pokemon {
    damage_relations: DamageRelations;
    game_indices: GameIndex[];
    generation: Generation;
    id: number;
    move_damage_class: Generation;
    moves: Generation[];
    name: string;
    names: Name[];
    pokemon: Pokemons;
    sprites: Sprites;
    species: Species;
}
export interface PokemonType {
    name: string;
    url: string;
}
export interface Species {
    name: string;
    url: string;
}

export interface DamageRelations {
    double_damage_from: Generation[];
    double_damage_to: Generation[];
    half_damage_from: Generation[];
    half_damage_to: Generation[];
    no_damage_from: any[];
    no_damage_to: Generation[];
}

export interface Generation {
    name: string;
    url: string;
}

export interface GameIndex {
    game_index: number;
    generation: Generation;
}

export interface Name {
    language: Generation;
    name: string;
}

export interface Pokemons {
    name: string;
    img: Sprites[];
}
export interface Sprites {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
}