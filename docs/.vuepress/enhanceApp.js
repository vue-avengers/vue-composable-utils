import VueCompositionAPI from '@vue/composition-api';
import ToggleDarkMode from "./components/ToggleDarkMode.vue";
import "./components/main.css";

export default ({ Vue }) => {
  Vue.use(VueCompositionAPI);
  Vue.component('ToggleDarkMode', ToggleDarkMode);
};
