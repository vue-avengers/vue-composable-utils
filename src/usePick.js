import { isArray, isObject } from '../utils/typeof';

/**
 * This function provides embed code related controls
 * @param {object} code This object contain two parameter.
 * @returns {object} object
 * @example{
    usePick(
      {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      },
      ['a', 'd'],
    )

   exit: {a: 1, d: 4}
 */

const usePick = (obj, arr = []) => {
  if (isArray(obj) || !isObject(obj)) return obj;

  let keys = isArray(arr) ? arr : Object.keys(arr);
  const mapping = !isArray(arr);

  return keys.reduce((picked, key) => {
    const newKey = mapping ? arr[key] : key;
    picked[newKey] = obj[key];

    return picked;
  }, {});
};

export default usePick;
