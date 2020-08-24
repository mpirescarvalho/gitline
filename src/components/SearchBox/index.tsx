import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

const SearchBox: React.FC = () => {
  const [username, setUsername] = useState('');

  const history = useHistory();

  function handleGoToTimeline(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username) {
      history.push(`timeline/${username}`);
    }
  }

  return (
    <Container onSubmit={handleGoToTimeline}>
      <input
        name="username"
        placeholder="username..."
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button type="submit">
        <MdSearch size={24} color="#fff" />
      </button>
    </Container>
  );
};

export default SearchBox;
