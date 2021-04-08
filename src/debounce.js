import { useState } from './state';

/**
 * This function wait a certain amount of time before running again.
 * So built to limit the number of times a function is called.
 * @param delay Delay time in milliseconds
 * @returns debounceVal, value, debounceListener
 */

export function useDebounce(delay = 1000) {
  let timeoutRef = null;
  const [value, setValue] = useState('');
  const [debounceVal, setDebounce] = useState('');

  const debounceListener = event => {
    if (timeoutRef !== null) {
      clearTimeout(timeoutRef);
    }

    setValue(event.target.value);
    timeoutRef = setTimeout(() => setDebounce(event.target.value), delay);
  };

  return { debounceVal, value, debounceListener };
}
