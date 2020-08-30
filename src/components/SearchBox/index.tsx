import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { DebounceInput } from 'react-debounce-input';
import PulseLoader from 'react-spinners/PulseLoader';

import { Wrapper, ContainerInput, LoadingContainer } from './styles';

interface SearchBoxProps<T> {
  placeholder?: string;
  debounceTimeout?: number;
  minLength?: number;
  autoCompleteLoading?: boolean;
  autoCompleteData?: T[];
  onSubmit(value: string | T): void;
  onChange(value: string): void;
  autoCompleteRender(item: T, index: number): JSX.Element;
}

function SearchBox<T extends {}>({
  onSubmit,
  onChange,
  placeholder,
  debounceTimeout = 300,
  minLength = 3,
  autoCompleteLoading,
  autoCompleteData,
  autoCompleteRender,
}: SearchBoxProps<T>) {
  const [value, setValue] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(value);
  }

  return (
    <Wrapper>
      <ContainerInput onSubmit={handleSubmit}>
        <DebounceInput
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder}
          debounceTimeout={debounceTimeout}
          minLength={minLength}
        />

        <button type="submit">
          <MdSearch size={24} color="#fff" />
        </button>
      </ContainerInput>

      {autoCompleteLoading ? (
        <LoadingContainer>
          <PulseLoader size={8} color="#9B1768" />
        </LoadingContainer>
      ) : (
        autoCompleteData && (
          <div>{autoCompleteData.map(autoCompleteRender)}</div>
        )
      )}
    </Wrapper>
  );
}

export default SearchBox;
