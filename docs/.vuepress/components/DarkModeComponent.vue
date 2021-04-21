<template>
  <div>
    <a @click="setDarkMode((darkMode = !darkMode))">
      <b v-if="darkMode">🌞 Light</b>
      <b v-if="!darkMode">🌜 Dark</b>
    </a>
  </div>
</template>

<script>
import { useDarkMode } from '../../../src';

export default {
  name: 'DarkModeComponent',
  setup() {
    const { darkMode, setDarkMode } = useDarkMode();
    return { darkMode, setDarkMode };
  },
};
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
  text-decoration: none !important;
}

b {
  font-size: 1.5em;
}
</style>
