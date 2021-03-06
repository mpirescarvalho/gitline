import React from 'react';
import Head from 'next/head';

import { useLogPageView } from '../hooks/analytics';

import SearchBox from '../components/SearchBox';

import { Container } from '../styles/pages/404';

interface NotFoundProps {
  user?: boolean;
}

const NotFound: React.FC<NotFoundProps> = ({ user }) => {
  useLogPageView('not_found');

  return (
    <Container>
      <Head>
        <meta name="robots" content="noindex" />
        <title>{user ? 'User not found' : 'Page not found'} · Gitline</title>
      </Head>
      <header>
        <SearchBox />
      </header>
      <main>
        <h1>404</h1>
        <h2>{user ? 'User not found' : 'Page not found'}</h2>
      </main>
    </Container>
  );
};

export default NotFound;
