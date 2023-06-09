import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '@/interfaces';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();
  const { id, name, img } = pokemon;

  const onClick = () => {
    (async () => {
      await router.push(`/pokemon/${id}`);
    })();
  };

  return (
    <Grid xs={6} sm={4} md={3} xl={2} key={id}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 4 }}>
          <Card.Image src={img} width='100%' height={140} />
          <Card.Footer>
            <Row justify='space-between'>
              <Text transform='capitalize'>{name}</Text>
              <Text>#{id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  );
};
