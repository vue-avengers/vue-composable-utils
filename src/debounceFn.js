/**
 * This function forces a function to wait a certain amount of time before running again.
 * So the function is built to limit the number of times a function is called.
 * @param {object} params This object contains two parameters
 * @param params.delay Delay time in milliseconds
 * @param params.immediate If immediate is true, the function triggers immediately and
 * then waits for the interval before being called again.
 * @param {function} func This callback fn that you want to execute after the debounce time
 * @returns {function} debouncedFn
 */

export function useDebounceFn({ delay, immediate }, func) {
  let timer = null;
  let initial = false;
  const debouncedFn = (...args) => {
    const callNow = resolve => {
      resolve(func(...args));
    };

    if (!timer && immediate && !initial) {
      return new Promise(resolve => {
        initial = true;
        callNow(resolve);
      });
    }

    clearTimeout(timer);

    return new Promise(resolve => {
      timer = setTimeout(() => callNow(resolve), delay);
    });
  };

  return debouncedFn;
}
