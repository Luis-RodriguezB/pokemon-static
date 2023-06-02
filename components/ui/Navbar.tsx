import Link from 'next/link';
import Image from 'next/image';
import { useTheme, Text, Spacer } from '@nextui-org/react';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      className='navbar'
      style={{ backgroundColor: theme?.colors.gray50.value }}
    >
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/16.png'
        alt='icono de la app'
        width={70}
        height={70}
      />

      <Link href='/' className='title'>
        <Text color='white' h2>P</Text>
        <Text color='white' h3>okémon</Text>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <Link href='/favorites'>
        <Text color='white' h3>Favoritos</Text>
      </Link>
    </div>
  );
};
