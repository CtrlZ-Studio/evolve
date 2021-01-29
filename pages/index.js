import Head from 'next/head';

import { WEB_NAME } from 'utils/constants';

import PageWrapper from 'components/shared/PageWrapper';
import HomeHero from 'components/home/HomeHero';
import HomeBody from 'components/home/HomeBody';

export default function PageHome() {
  return (
    <>
      <Head>
        <title>{WEB_NAME} | Inicio</title>
        <meta
          name="description"
          content="Evolve Sport Material es tu tienda de referencia de material deportivo. En nuestro amplio catálogo podrás encontrar equipos de alta calidad y última generación con los que llevar a cabo todo tipo de rutinas deportivas y de readaptación."
        />
      </Head>

      <PageWrapper>
        <HomeHero />
        <HomeBody />
      </PageWrapper>
    </>
  );
}
