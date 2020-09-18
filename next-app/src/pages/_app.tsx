import { AppProps } from 'next/app';

import GlobalStyles from '../styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <GlobalStyles />
  </>
);

export default MyApp;
