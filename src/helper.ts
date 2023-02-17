import { RefObject, useEffect } from 'react';

export const useOnClickOutside = (ref: RefObject<HTMLDivElement>, handler: any) => {

  useEffect(() => {
    const listener = (event: { target: any; }) => {
      if (event.target.closest('[data-menu="toggle"]') || !ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  },
    [ref, handler],
  );
}
