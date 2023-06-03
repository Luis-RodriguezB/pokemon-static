import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { FavoritePokemons } from '@/components/pokemon/FavoritePokemons';
import { localFavorites } from '@/utils';

const FavoritePage: NextPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.getPokemonsId());
  }, []);

  return (
    <Layout
      title='Pókemons favoritos'
      description='Lista de pokemones favoritos'
    >
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritesPokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavoritePage;
