import { AppProps } from 'next/app';

import GlobalStyles from '../styles/global';

import { ThemeProvider } from '../hooks/useTheme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  //TODO: start analytics

  <ThemeProvider>
    <Component {...pageProps} />
    <GlobalStyles />
  </ThemeProvider>
);

export default MyApp;
