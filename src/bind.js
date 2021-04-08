import { useState } from './state';

/**
 * This function update value when another value changes (data-binding).
 * @param {initial} - The initial is the state used during the initial render.
 * @returns value, setValue, changed, reset
 */

export function useBind(initial) {
  const [value, setValue] = useState(initial);

  const reset = () => setValue(initial);
  const changed = e => setValue(e.target.value);

  return {
    value,
    setValue,
    changed,
    reset,
  };
}
