import Head from 'next/head';

import { WEB_NAME } from 'utils/constants';

import PageHero from 'components/shared/PageHero';
import PageWrapper from 'components/shared/PageWrapper';
import Separator from 'components/shared/Separator';
import CommunityBody from 'components/community/CommunityBody';

export default function PageComunidad() {
  return (
    <>
      <Head>
        <title>{WEB_NAME} | Comunidad</title>
      </Head>

      <PageWrapper>
        <PageHero heroTitle="únete." heroImage="community-hero.png" />

        <CommunityBody />
      </PageWrapper>
    </>
  );
}
