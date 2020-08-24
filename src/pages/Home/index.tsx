import React from 'react';

import SearchBox from '../../components/SearchBox';

import { Container } from './styles';

const SearchPage: React.FC = () => {
  return (
    <Container>
      <h1>Gitline</h1>
      <SearchBox />
    </Container>
  );
};

export default SearchPage;
