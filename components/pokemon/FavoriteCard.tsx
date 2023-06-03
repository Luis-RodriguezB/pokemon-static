import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid } from '@nextui-org/react';

export const FavoriteCard: FC<{ pokemonId: number }> = ({ pokemonId }) => {
  const route = useRouter();

  const onFavoriteClick = () => {
    (async () => {
      await route.push(`/pokemon/${pokemonId}`);
    })();
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={`Pokemon-#${pokemonId}`}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onPress={onFavoriteClick}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          alt={`Pokemon #${pokemonId}`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  );
};
