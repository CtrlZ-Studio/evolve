import Head from 'next/head';
import { WEB_NAME } from 'utils/constants';

import PageHero from 'components/shared/PageHero';
import PageWrapper from 'components/shared/PageWrapper';
import CatalogueBody from 'components/catalogue/CatalogueBody';

export default function PageCatalogo() {
  return (
    <>
      <Head>
        <title>{WEB_NAME}</title>
      </Head>

      <PageWrapper>
        <PageHero heroTitle="explora." heroImage="catalogue-hero.png" />
        <CatalogueBody />
      </PageWrapper>
    </>
  );
}
