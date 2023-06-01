import { NextPage, GetStaticProps } from 'next';
import { Layout } from '@/components/layouts';
import { pokeAPI } from '@/api';
import { PokemonsResponse, SmallPokemon } from '@/interfaces';
import axios from 'axios';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }: Props) => {
  return (
    <Layout
      title='Listado de Pokemons'
      description='Lista de pokemons de diferentes generaciones'
    >
      <ul>
        {pokemons.map(({ id, name }) => (
          <li key={id}>
            #{id} - {name}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {
    data: { results },
  } = await pokeAPI.get<PokemonsResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = results.map((poke, i) => ({
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
