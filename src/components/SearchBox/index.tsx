import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

const SearchBox: React.FC = () => {
  return (
    <Container>
      <input placeholder="username..." />
      <button>
        <MdSearch size={24} color="#fff" />
      </button>
    </Container>
  );
};

export default SearchBox;
