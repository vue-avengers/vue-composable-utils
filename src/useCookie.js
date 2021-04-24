import { ref } from '@vue/composition-api';

const useCookie = (cookieArg = document.cookie) => {
  const cookie = ref(cookieArg);

  const parseCookie = () => {
    return cookie.value.split(';').reduce((object, cookieString) => {
      const splitCookie = cookieString.trim().split('=');
      try {
        return { ...object, [splitCookie[0]]: JSON.parse(splitCookie[1]) };
      } catch (error) {
        return { ...object, [splitCookie[0]]: splitCookie[1] };
      }
    }, {});
  };

  const setCookie = (key, value, options = {}) => {
    const keyValuePairs = Object.entries(options);
    const optionsString = keyValuePairs.reduce((acc, item) => (acc = acc + `${item[0]}=${item[1]};`), '');

    const cookieObject = parseCookie();

    cookie.value = JSON.stringify({
      ...cookieObject,
      [key]: `${value};${optionsString}`,
    });
  };

  const appendCookie = (key, value, specialCharacter = ',') => {
    const parsedCookie = parseCookie();
    const newCookieValue = `${parsedCookie[key]}${specialCharacter}${value}`;
    cookie.value = `${key}=${newCookieValue}`;
  };

  const getCookie = key => {
    const cookieObject = parseCookie(cookie.value);

    return cookieObject[key];
  };

  const deleteCookie = key => {
    // expiration date is set to an undoubtedly past date for to be deleted immediately
    cookie.value = `${key}=; expires=Thu Jan 01 1970 00:00:00 GMT"`;
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
