import { useCallback, useEffect, useState } from 'react';

export const useMediaQuery = () => {
  const BREAKPOINT = 768;

  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${BREAKPOINT}px)`);
    media.addEventListener('change', updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', updateTarget);
  }, [updateTarget]);

  return targetReached;
};