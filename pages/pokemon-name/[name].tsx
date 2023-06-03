import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Card, Container, Grid, Image, Row, Text } from '@nextui-org/react';
import { Layout } from '@/components/layouts';
import { pokeAPI } from '@/api';
import { Pokemon, PokemonsResponse } from '@/interfaces';
import { typeColours } from '@/helpers';
import { capitalizeWord } from '@/utils';

interface Props {
  pokemon: Pokemon;
}

export const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <Layout title={`Pokemon - ${capitalizeWord(pokemon.name)}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px', p: 15 }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  '/no-image.png'
                }
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify='flex-end' css={{ gap: '5px', padding: '5px' }}>
                {pokemon.types.map(({ type }) => (
                  <Text
                    css={{ background: typeColours[type.name] || '#777' }}
                    key={type.name}
                    transform='capitalize'
                    className='pokemon-type'
                  >
                    {type.name}
                  </Text>
                ))}
              </Row>
            </Card.Footer>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text h1 transform='capitalize'>
                {pokemon.name}
              </Text>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction='row' display='flex'>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeAPI.get<PokemonsResponse>('/pokemon?limit=151');

  return {
    paths: data.results.map(({ name }) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${name}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonByNamePage;
