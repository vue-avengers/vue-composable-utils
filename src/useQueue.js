import { computed } from "@vue/composition-api";
import { useState } from "./useState";

const useQueue = (initial = []) => {
  const [queue, setQueue] = useState(initial);

  const set = (value) => {
    return setQueue(value);
  }

  const first = computed(() => {
    const [first] = queue.value;
    return first;
  });

  const last = computed(() => {
    const { length, [length - 1]: last } = queue.value;
    return last;
  });

  const size = computed(() => {
    return queue.value.length;
  });

  const remove = () => {
    let result;
    const [first, ...rest] = queue.value
    const removed = ([first, ...rest]) => {
      result = first;
      return rest;
    }
    setQueue(removed([first, ...rest]));
    return result;
  }

  return {
    state: queue,
    set,
    remove,
    first,
    last,
    size
  };
}

export default useQueue;
