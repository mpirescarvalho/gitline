import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import { Container } from './styles';
import useOutsideClick from '../../hooks/useOutsideClick';

interface DropdownProps {
  items: string[];
  selected: string;
  prefix: string;
  onItemSelected: (item: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  selected,
  prefix,
  onItemSelected,
}) => {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick<HTMLDivElement>(() => setOpen(false));

  function handleItemClick(item: string) {
    setOpen(false);
    onItemSelected(item);
  }

  return (
    <Container ref={ref}>
      <div onClick={() => setOpen(!open)}>
        {prefix}
        <span>{selected}</span>
        <FaCaretDown />
      </div>
      {open &&
        items.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item)}>
            {item}
          </div>
        ))}
    </Container>
  );
};

export default Dropdown;
