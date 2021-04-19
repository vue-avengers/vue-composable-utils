export const isClient = typeof window !== 'undefined';

export const isArray = Array.isArray;

export const isFunction = val => typeof val === 'function';

export const isString = val => typeof val === 'string';

export const isSymbol = val => typeof val === 'symbol';

export const isBoolean = val => typeof val === 'boolean';

export const isDate = val => isObject(val) && isFunction(val.getTime);

export const isNumber = val => typeof val === 'number';

export const isObject = val => val !== null && typeof val === 'object';

export const isElement = val => isObject(val) && !!val.tagName;

export function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
