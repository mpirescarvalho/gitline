import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import GlobalStyles from '../styles/global';

import { ThemeProvider } from '../hooks/useTheme';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => (
  //TODO: start analytics

  <ThemeProvider>
    <Component {...pageProps} />
    <GlobalStyles />
  </ThemeProvider>
);

export default MyApp;
