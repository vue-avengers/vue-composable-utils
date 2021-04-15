import VueCompositionAPI from '@vue/composition-api';
import ToggleDarkMode from "./components/ToggleDarkMode.vue";
import Debounce from "./components/debounce.vue";
import DebouncedFn from "./components/debouncedFn.vue";
import LocalStorage from "./components/LocalStorage.vue";
import List from "./components/List.vue";
import DateComponent from "./components/Date.vue";
import "./components/main.css";
import "./plugins/dayjs.js";

export default ({ Vue }) => {
  Vue.use(VueCompositionAPI);
  Vue.component('ToggleDarkMode', ToggleDarkMode);
  Vue.component('DebouncedFn', DebouncedFn);
  Vue.component('Debounce', Debounce);
  Vue.component('LocalStorage', LocalStorage);
  Vue.component('List', List);
  Vue.component('Date', DateComponent);
};
