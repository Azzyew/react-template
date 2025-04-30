import { useEffect, useState } from 'react';

type useDebounceProps = {
  value: string;
  delay?: number;
}

export const useDebounce = ({ value, delay = 1000 }: useDebounceProps) => {
  const [debounceValue, setDebounceValue] = useState(value);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    
    return () => {
      clearTimeout(timeout);
    }
  }, [value, delay]);
  
  return debounceValue;
};