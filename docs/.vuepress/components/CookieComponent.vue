<template>
  <div></div>
</template>

<script>
import { useCookie } from '../../../src';

export default {
  setup() {
    const { setCookie, getCookie, parseCookie, cookie, appendCookie, deleteCookie } = useCookie();

    setCookie('cookie', 'triple-chocolate cookie');

    console.log(getCookie('cookie'));

    setCookie('cookie-2', 'chocolate chips cookie');

    console.log(getCookie('cookie-2'));

    appendCookie('cookie', 'hot');
    appendCookie('cookie', 'crisp');
    appendCookie('cookie', 'delicious');

    deleteCookie('cookie');

    console.log(cookie.value);
  },
}
</script>

<style scoped>

</style>
