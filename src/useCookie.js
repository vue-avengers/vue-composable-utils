import { ref } from '@vue/composition-api';
import { stringifyObject } from '../utils/stringify';

const useCookie = (cookieArg = document.cookie) => {
  const cookie = ref(cookieArg);

  const parseCookie = () => {
    return cookie.value.split(';').reduce((object, cookieString) => {
      const splitCookie = cookieString.trim().split('=');

      return { ...object, [splitCookie[0]]: splitCookie[1] };
    }, {});
  };

  const setCookie = (key, value, options = {}) => {
    const optionsString = stringifyObject(options);

    cookie.value = `${cookie.value};${key}=${value}${optionsString}`;
  };

  const appendCookie = (key, value, specialCharacter = ',') => {
    const parsedCookie = parseCookie();
    parsedCookie[key] = `${parsedCookie[key]}${specialCharacter}${value}`;

    cookie.value = stringifyObject(parsedCookie);
  };

  const getCookie = key => {
    const cookieObject = parseCookie();

    return cookieObject[key];
  };

  const deleteCookie = key => {
    // expiration date is set to an undoubtedly past date for to be deleted immediately
    const parsedCookie = parseCookie();
    parsedCookie[key] = ';expires=Thu Jan 01 1970 00:00:00 GMT"';

    cookie.value = stringifyObject(parsedCookie);
  };

  return {
    cookie,
    setCookie,
    appendCookie,
    parseCookie,
    getCookie,
    deleteCookie,
  };
};

export default useCookie;
