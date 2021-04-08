import DefaultTheme from 'vitepress/theme';
import ToggleDarkMode from './dark/ToggleDarkMode.vue';
import './main.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ToggleDarkMode', ToggleDarkMode);
  },
};

