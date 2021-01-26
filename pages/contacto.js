import Head from 'next/head';

import { WEB_NAME } from 'utils/constants';

import PageHero from 'components/shared/PageHero';
import PageWrapper from 'components/shared/PageWrapper';
import ContactSocials from 'components/contact/ContactSocials';

export default function PageContact() {
  return (
    <>
      <Head>
        <title>{WEB_NAME} | Contacto</title>
      </Head>

      <PageWrapper>
        <PageHero heroTitle="hablamos?" heroImage="contact-hero.png" />
        <ContactSocials />
      </PageWrapper>
    </>
  );
}
