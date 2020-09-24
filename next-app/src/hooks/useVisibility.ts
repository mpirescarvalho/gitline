import { createRef, useEffect, useState } from 'react';

export default function useVisibility<Element extends HTMLElement>(
  offset = 0
): [Boolean, React.RefObject<Element>] {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = createRef<Element>();

  const onScroll = () => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const { top, bottom } = currentElement.current.getBoundingClientRect();
    setIsVisible(top + offset >= 0 && bottom - offset <= window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return [isVisible, currentElement];
}
