import React, { useEffect, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container } from './styles';
import useOutsideClick from '../../hooks/useOutsideClick';

interface DropdownProps {
  items: string[];
  selected: string;
  prefix: string;
}

const Dropdown: React.FC<DropdownProps> = ({ items, selected, prefix }) => {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick<HTMLDivElement>(() => setOpen(false));

  const router = useRouter();

  useEffect(() => setOpen(false), [router]);

  //TODO: href generating console warning

  return (
    <Container ref={ref}>
      <div className="item" onClick={() => setOpen(!open)}>
        <div>
          {prefix}
          <span>{selected}</span>
        </div>
        <FaCaretDown />
      </div>
      <ul className="dropdown">
        {open &&
          items.map((item, index) => (
            <li>
              <Link
                key={index}
                href={`/timeline/${router.query.username}?lang=${item}`}
                prefetch={false}
                shallow
              >
                <a>
                  <div className="item">{item}</div>
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default Dropdown;
