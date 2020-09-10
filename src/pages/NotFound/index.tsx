import React from 'react';

import { useLogPageView } from '../../hooks/analytics';

import SearchBox from '../../components/SearchBox';

import { Container } from './styles';

const NotFound: React.FC = () => {
  useLogPageView('not_found');

  return (
    <Container>
      <header>
        <SearchBox />
      </header>
      <main>
        <h1>404</h1>
        <h2>User not found</h2>
      </main>
    </Container>
  );
};

export default NotFound;
