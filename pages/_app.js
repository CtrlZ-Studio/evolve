import Head from 'next/head';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

import Layout from 'components/nav/Layout';

import 'styles/globals.css';

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
