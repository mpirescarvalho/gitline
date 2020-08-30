import React from 'react';
import { useHistory } from 'react-router-dom';

import SearchBox from '../../components/SearchBox';

import { Container } from './styles';

interface User {
  key: number;
  name: string;
}

const SearchPage: React.FC = () => {
  const history = useHistory();

  function handleGoToTimeline(username: string) {
    if (username) {
      history.push(`timeline/${username}`);
    }
  }

  function handleAutoComplete(partialUsername: string) {}

  return (
    <Container>
      <h1>Gitline</h1>
      <SearchBox<User>
        placeholder="username..."
        onChange={handleAutoComplete}
        onSubmit={handleGoToTimeline}
        autoCompleteLoading={false}
        autoCompleteData={[
          { key: 1, name: 'abc' },
          { key: 2, name: 'cde' },
          { key: 3, name: 'efg' },
        ]}
        autoCompleteRender={item => <div>{item.name}</div>}
      />
    </Container>
  );
};

export default SearchPage;
