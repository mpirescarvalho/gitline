import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Head from 'next/head';

import '../firebase/initFirebase';

import GlobalStyles from '../styles/global';

import { ThemeProvider } from '../hooks/useTheme';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

//TODO: SEO issues

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gitline.web.app/" />
      <meta
        property="og:title"
        content="Gitline · Your github repositories history beatifuly structured"
      />
      <meta
        property="og:description"
        content="Gitline is the right place to view your github repositories timeline beatifuly organized and sorted by creation date. Filter them by the main language and share with anyone you want."
      />
      <meta property="og:image" content="/social-img.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://gitline.web.app/" />
      <meta
        property="twitter:title"
        content="Gitline · Your github repositories history beatifuly structured"
      />
      <meta
        property="twitter:description"
        content="Gitline is the right place to view your github repositories timeline beatifuly organized and sorted by creation date. Filter them by the main language and share with anyone you want."
      />
      <meta property="twitter:image" content="/social-img.jpg" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Component {...pageProps} />
    <GlobalStyles />
  </ThemeProvider>
);

export default MyApp;
