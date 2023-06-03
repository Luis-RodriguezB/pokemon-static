import { pokeAPI } from '@/api';
import { Pokemon, Sprites, Type } from '@/interfaces';

export interface PokemonRefact {
  id: number;
  name: string;
  sprites: Sprites;
  types: Type[];
}

interface Response {
  pokemon: PokemonRefact;
}

export const getPokemon = async (nameOrId: string) => {
  const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${nameOrId}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
    types: data.types,
  };
};
