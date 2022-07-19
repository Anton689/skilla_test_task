import { useEffect } from 'react';

export const useClickOutside = (
  open: boolean,
  setOpen: (value: boolean) => void,
  ref: any,
) =>
  useEffect(() => {
    const clickedOutside = (e: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', clickedOutside);
    return () => {
      document.removeEventListener('click', clickedOutside);
    };
  }, [open]);
