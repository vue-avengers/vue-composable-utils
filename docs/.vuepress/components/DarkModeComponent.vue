<template>
  <div class="darkMode">
    <a @click="setDarkMode((darkMode = !darkMode))">
      <b v-if="darkMode">🌞 Light Mode</b>
      <b v-if="!darkMode">🌜 Dark Mode</b>
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
.darkMode {
    font-weight: 700;
  font-size: 1.2em;
  border: 1px solid #ddd;
  border-left: 4px solid #c9c9c9;
  color: #666;
  font-family: monospace;
  padding: 1em 1.5em;
  display: block;
}
a {
  cursor: pointer;
  text-decoration: none !important;
}

b {
  font-size: 1.5em;
}
</style>
