import { useState, useEffect, useCallback, useRef } from 'react';
import { MdSearch } from 'react-icons/md';
import { DebounceInput } from 'react-debounce-input';
import PulseLoader from 'react-spinners/PulseLoader';
import { useRouter } from 'next/router';
import Link from 'next/link';
import '../../firebase/initFirebase';

import { analytics } from 'firebase/app';

import useOutsideClick from '../../hooks/useOutsideClick';
import { useRouteEffect } from '../../hooks/useRouting';

import AutoCompleteItem from '../../components/AutoCompleteItem';

import {
  Wrapper,
  ContainerInput,
  LoadingContainer,
  ItemContainer,
} from './styles';

interface SearchResponse {
  items: User[];
}
interface User {
  id: number;
  login: string;
}

const SearchBox = () => {
  const [value, setValue] = useState<string>('');
  const [activeItem, setActiveItem] = useState(0);
  const [focused, setFocused] = useState(false);
  const [isRoutingState, setIsRoutingState] = useState(false);

  const isRouting = useRef(false);
  const canDisplayItems = useRef(false);

  const [loading, setLoading] = useState(false);
  const [autoCompleteItems, setAutoCompleteItems] = useState<User[]>([]);

  const wrapperRef = useOutsideClick<HTMLDivElement>(() => setFocused(false));

  const router = useRouter();

  function handleGoToTimeline(user: User | string) {
    canDisplayItems.current = false;
    isRouting.current = true;

    if (typeof user === 'object') {
      analytics().logEvent('select_item', {
        item_list_id: user.id.toString(),
        item_list_name: user.login,
      });

      setValue(user.login);
      router.push(`/timeline/${user.login}`);
    } else if (user !== '') {
      analytics().logEvent<string>('view_item', {
        value: user,
      });

      router.push(`/timeline/${user}`);
    }
  }

  const handleAutoComplete = useCallback(
    (partialUsername: string) => {
      if (
        partialUsername &&
        partialUsername.length >= 3 &&
        !isRouting.current
      ) {
        canDisplayItems.current = true;
        setLoading(true);

        analytics().logEvent('search', {
          search_term: partialUsername,
        });

        fetch(
          `https://api.github.com/search/users?q=${partialUsername}+in:login&per_page=4&page=1`
        )
          .then(response => response.json())
          .then((res: SearchResponse) => {
            if (!isRouting.current && canDisplayItems.current) {
              canDisplayItems.current = false;
              setLoading(false);
              setAutoCompleteItems(res.items);

              analytics().logEvent('view_search_results', {
                search_term: partialUsername,
              });
            }
          })
          .catch(err => {
            canDisplayItems.current = false;
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
    },
    [isRouting, canDisplayItems]
  );

  useEffect(() => {
    handleAutoComplete(value);
  }, [handleAutoComplete, value]);

  useEffect(() => {
    setActiveItem(0);
  }, [autoCompleteItems]);

  useRouteEffect(
    () => {
      //routing start
      canDisplayItems.current = false;
      isRouting.current = true;
      setIsRoutingState(true);
      setAutoCompleteItems([]);
      setLoading(false);
    },
    () => {
      //routing end
      isRouting.current = false;
      setIsRoutingState(false);
      setValue('');
    }
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!loading && autoCompleteItems && autoCompleteItems.length > 0) {
      handleGoToTimeline(autoCompleteItems[activeItem]);
    } else {
      handleGoToTimeline(value);
    }
  }

  function handleKeyDown({ keyCode }: { keyCode: number }) {
    //UpArrow
    if (keyCode === 38) {
      if (activeItem > 0) {
        setActiveItem(activeItem - 1);
      }
    }

    //DownArrow
    if (keyCode === 40) {
      if (activeItem < (autoCompleteItems?.length || 0) - 1) {
        setActiveItem(activeItem + 1);
      }
    }
  }

  function handleItemMouseMove(index: number) {
    setActiveItem(index);
  }

  return (
    <Wrapper ref={wrapperRef} onKeyDown={handleKeyDown} tabIndex={0}>
      <ContainerInput onSubmit={handleSubmit}>
        <DebounceInput
          value={value}
          onChange={e => setValue(e.target.value)}
          forceNotifyByEnter={true}
          placeholder="username..."
          debounceTimeout={800}
          minLength={0}
          onFocus={() => setFocused(true)}
          disabled={isRoutingState}
        />

        <button type="submit">
          <MdSearch size={24} color="#fff" />
        </button>
      </ContainerInput>

      {loading ? (
        <LoadingContainer>
          <PulseLoader size={8} color="#9B1768" />
        </LoadingContainer>
      ) : (
        autoCompleteItems &&
        focused && (
          <div>
            {autoCompleteItems.map((item, index) => (
              <ItemContainer
                key={index}
                onMouseEnter={() => handleItemMouseMove(index)}
                onClick={() => handleGoToTimeline(item)}
              >
                <Link href={`/timeline/${item.login}`} prefetch={false}>
                  <a>
                    <AutoCompleteItem
                      className={`${index === activeItem && 'active'}`}
                    >
                      {item.login}
                    </AutoCompleteItem>
                  </a>
                </Link>
              </ItemContainer>
            ))}
          </div>
        )
      )}
    </Wrapper>
  );
};

export default SearchBox;
