import { MutableRefObject, useRef, useEffect } from 'react';

export default function useOutsideClick<T extends HTMLElement>(
  callback: (element: T) => void
): MutableRefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
        callback(ref.current);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ref]);

  return ref;
}
