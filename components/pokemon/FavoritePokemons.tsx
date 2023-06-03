import { Grid } from '@nextui-org/react';
import { FC } from 'react';
import { FavoriteCard } from './FavoriteCard';

export const FavoritePokemons: FC<{ favoritesPokemons: number[] }> = ({
  favoritesPokemons,
}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favoritesPokemons.map((id) => (
        <FavoriteCard key={`pokemon-#${id}`} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
