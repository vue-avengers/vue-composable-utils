import VueCompositionAPI from '@vue/composition-api';
import ToggleDarkMode from './components/ToggleDarkMode.vue';
import DebounceComponent from './components/DebounceComponent.vue';
import DebouncedFnComponent from './components/DebouncedFnComponent.vue';
import LocalStorageComponent from './components/LocalStorageComponent.vue';
import ListComponent from './components/ListComponent.vue';
import DateComponent from './components/DateComponent.vue';
import StateComponent from './components/StateComponent.vue';
import './public/style/main.css';
import './plugins/dayjs.js';

export default ({ Vue }) => {
  Vue.use(VueCompositionAPI);
  Vue.component('ToggleDarkMode', ToggleDarkMode);
  Vue.component('DebouncedFnComponent', DebouncedFnComponent);
  Vue.component('DebounceComponent', DebounceComponent);
  Vue.component('LocalStorageComponent', LocalStorageComponent);
  Vue.component('ListComponent', ListComponent);
  Vue.component('DateComponent', DateComponent);
  Vue.component('StateComponent', StateComponent);
};
