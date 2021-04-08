import { useState } from './state';

/**
 * This function update value when another value changes (data-binding).
 * @param {initial} - The initial is the state used during the initial render.
 * @returns  set, sort, filter, first, last, list, deleteFirst, deleteLast, reduce, reset, push,
 */

export function useList(initialList = []) {
  const [list, setList] = useState(initialList);

  const isList = list => list || [];
  const isArray = list => (Array.isArray(list) ? [] : {});

  const push = (...values) => {
    const pushed = list => isList([...list, ...values]);
    return setList(pushed(list.value));
  };

  const sort = fn => {
    const sorted = (funs, list) => [...isList(list)].sort(funs);
    return setList(sorted(fn, list.value));
  };

  const filter = fn => {
    const filtered = (funs, list) => [...isList(list)].filter(funs);
    return setList(filtered(fn, list.value));
  };

  const reduce = fn => {
    if (!Array.isArray(list.value)) return;
    const reduced = (funs, list) => [...isList(list)].reduce(funs, isArray(list));
    return setList(reduced(fn, list.value));
  };

  const first = () => {
    const [first] = isList(list.value);
    return setList(first);
  };

  const last = () => {
    const { length, [length - 1]: last } = isList(list.value);
    return setList(last);
  };

  const deleteFirst = () => {
    const [, ...rest] = isList(list.value);
    return setList(rest);
  };

  const deleteLast = () => {
    const { length, [length - 1]: last } = list.value;
    const filtered = list.value.filter(v => v !== last);
    return setList(filtered);
  };

  const reset = () => setList(initialList);

  return {
    set: setList,
    sort,
    filter,
    first,
    last,
    list,
    deleteFirst,
    deleteLast,
    reduce,
    reset,
    push,
  };
}
