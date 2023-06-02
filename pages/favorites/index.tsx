import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { localFavorites } from '@/utils';
import { Card, Grid } from '@nextui-org/react';

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
        <Grid.Container gap={2} direction='row' justify='flex-start'>
          {favoritesPokemons.map((id) => (
            <Grid xs={6} sm={3} md={2} xl={1} key={`Pokemon-#${id}`}>
              <Card isHoverable isPressable css={{ padding: 10 }}>
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${67}.svg`}
                  alt={`Pokemon #${id}`}
                  width={'100%'}
                  height={140}
                />
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default FavoritePage;
