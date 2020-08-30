import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import SearchBox from '../../components/SearchBox';

import { Container, AutoCompleteItem } from './styles';

interface SearchResponse {
  items: User[];
}
interface User {
  id: number;
  login: string;
}

const SearchPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [autoCompleteItems, setAutoCompleteItems] = useState<User[]>([
    { id: 1, login: 'mpirescarvalho' },
    { id: 2, login: 'mpires' },
  ]);

  const history = useHistory();

  function handleGoToTimeline(username: string) {
    if (username) {
      history.push(`timeline/${username}`);
    }
  }

  const handleAutoComplete = useCallback((partialUsername: string) => {
    // if (partialUsername) {
    //   setLoading(true);
    //   fetch(
    //     `https://api.github.com/search/users?q=${partialUsername}+in:login&per_page=4&page=1`
    //   )
    //     .then(response => response.json())
    //     .then((res: SearchResponse) => {
    //       setLoading(false);
    //       setAutoCompleteItems(res.items);
    //     })
    //     .catch(err => {
    //       setLoading(false);
    //       console.error(err);
    //     });
    // } else {
    //   setAutoCompleteItems([]);
    // }
  }, []);

  return (
    <Container>
      <h1>Gitline</h1>
      <SearchBox<User>
        placeholder="username..."
        onChange={handleAutoComplete}
        onSubmit={handleGoToTimeline}
        debounceTimeout={800}
        autoCompleteLoading={loading}
        autoCompleteData={autoCompleteItems}
        autoCompleteRender={(item, active) => (
          <AutoCompleteItem className={`${active && 'active'}`}>
            {item.login}
          </AutoCompleteItem>
        )}
      />
    </Container>
  );
};

export default SearchPage;
