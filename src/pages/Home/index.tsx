import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { analytics } from 'firebase/app';

import { useLogPageView } from '../../hooks/analytics';
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
  const [autoCompleteItems, setAutoCompleteItems] = useState<User[]>([]);

  const history = useHistory();

  useLogPageView('home_page');

  function handleGoToTimeline(user: User | string) {
    if (typeof user === 'object') {
      analytics().logEvent('select_item', {
        item_list_id: user.id.toString(),
        item_list_name: user.login,
      });
      history.push(`timeline/${user.login}`);
    } else if (!loading && user !== '') {
      history.push(`timeline/${user}`);
    }
  }

  const handleAutoComplete = useCallback((partialUsername: string) => {
    if (partialUsername && partialUsername.length >= 3) {
      setLoading(true);

      analytics().logEvent('search', {
        search_term: partialUsername,
      });

      fetch(
        `https://api.github.com/search/users?q=${partialUsername}+in:login&per_page=4&page=1`
      )
        .then(response => response.json())
        .then((res: SearchResponse) => {
          setLoading(false);
          setAutoCompleteItems(res.items);

          analytics().logEvent('view_search_results', {
            search_term: partialUsername,
          });
        })
        .catch(err => {
          setLoading(false);
          console.error(err);
          analytics().logEvent('exception', {
            description: err,
            fatal: false,
          });
        });
    } else {
      setAutoCompleteItems([]);
    }
  }, []);

  return (
    <>
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
    </>
  );
};

export default SearchPage;
