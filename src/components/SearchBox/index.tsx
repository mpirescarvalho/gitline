import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import { DebounceInput } from 'react-debounce-input';
import PulseLoader from 'react-spinners/PulseLoader';

import { Wrapper, ContainerInput, LoadingContainer } from './styles';

interface SearchBoxProps<T> {
  placeholder?: string;
  debounceTimeout?: number;
  autoCompleteLoading?: boolean;
  autoCompleteData?: T[];
  onSubmit(value: string | T): void;
  onChange(value: string): void;
  autoCompleteRender(item: T, active: boolean): JSX.Element;
}

function SearchBox<T extends {}>({
  onSubmit,
  onChange,
  placeholder,
  debounceTimeout = 300,
  autoCompleteLoading,
  autoCompleteData,
  autoCompleteRender,
}: SearchBoxProps<T>) {
  const [value, setValue] = useState<string>('');
  const [activeItem, setActiveItem] = useState(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      !autoCompleteLoading &&
      autoCompleteData &&
      autoCompleteData.length > 0
    ) {
      onSubmit(autoCompleteData[activeItem]);
    } else {
      onSubmit(value);
    }
  }

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  useEffect(() => {
    setActiveItem(0);
  }, [autoCompleteData]);

  function handleActiveItemChange({ keyCode }: { keyCode: number }) {
    //UpArrow
    if (keyCode === 38) {
      if (activeItem > 0) {
        setActiveItem(activeItem - 1);
      }
    }

    //DownArrow
    if (keyCode === 40) {
      if (activeItem < (autoCompleteData?.length || 0) - 1) {
        setActiveItem(activeItem + 1);
      }
    }
  }

  return (
    <Wrapper onKeyDown={handleActiveItemChange} tabIndex={0}>
      <ContainerInput onSubmit={handleSubmit}>
        <DebounceInput
          value={value}
          onChange={e => setValue(e.target.value)}
          forceNotifyByEnter={true}
          placeholder={placeholder}
          debounceTimeout={debounceTimeout}
          minLength={0}
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
          <div>
            {autoCompleteData.map((item, index) =>
              autoCompleteRender(item, index === activeItem)
            )}
          </div>
        )
      )}
    </Wrapper>
  );
}

export default SearchBox;
