import { NextPage, GetStaticProps } from 'next';
import { pokeAPI } from '@/api';
import { Layout } from '@/components/layouts';
import { PokemonList } from '@/components/pokemon';
import { PokemonsResponse, SmallPokemon } from '@/interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }: Props) => {
  return (
    <Layout
      title='Listado de Pokemons'
      description='Lista de pokemons de diferentes generaciones'
    >
      <PokemonList pokemons={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeAPI.get<PokemonsResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
