import { readonly, ref } from '@vue/composition-api';

/**
 * This function is used in reactive state.
 * @param {initial} - The initial argument is the state used during the initial render.
 * @returns - state and set
 */

export function useState(initial) {
  const state = ref(initial);
  const set = val => {
    state.value = val;
  };
  return [readonly(state), set];
}
