import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?: string;
  keywords?: string;
  description?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  title = 'Pokemon App',
  keywords,
  description = 'Página de pókemones',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Luis Rodriguez' />
        <meta name='description' content={description} />
        <meta name='keywords' content={`${keywords}, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main className="main">
        {children}
      </main>
    </>
  );
};
