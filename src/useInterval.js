import { onMounted } from '@vue/composition-api';
import { useState } from './useState';

/**
 * @param {function} fn This callback fn that you want to execute after the Interval
 * @param ms ms time in milliseconds
 * @returns isActive, start, stop,
 */

const useInterval = (fn, ms = 100) => {
  let interval = null;
  const [active, setActive] = useState(false);

  const remove = () => {
    if (!interval) return;
    clearInterval(interval);
    interval = null;
  };

  const stop = () => {
    setActive(false);
    remove();
  };

  const start = () => (ms >= 0 ? setIntervalFn() : null);

  const setIntervalFn = () => {
    setActive(true);
    remove();
    interval = setInterval(fn, ms);
  };

  if (typeof window !== 'undefined') {
    start();
  }

  onMounted(stop);

  return {
    isActive: active,
    start,
    stop,
  };
};

export default useInterval;
