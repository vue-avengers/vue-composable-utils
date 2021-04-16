import VueCompositionAPI from '@vue/composition-api';
import BindInputComponent from './components/BindInputComponent.vue';
import BindSelectComponent from './components/BindSelectComponent.vue';
import DateComponent from './components/DateComponent.vue';
import DebounceComponent from './components/DebounceComponent.vue';
import DebouncedFnComponent from './components/DebouncedFnComponent.vue';
import LocalStorageComponent from './components/LocalStorageComponent.vue';
import ListComponent from './components/ListComponent.vue';
import StateComponent from './components/StateComponent.vue';
import EmbedComponent from './components/EmbedComponent.vue';
import ToggleDarkMode from './components/ToggleDarkMode.vue';
import './public/style/main.css';
import './plugins/dayjs.js';

export default ({ Vue }) => {
  Vue.use(VueCompositionAPI);
  Vue.component('BindInputComponent', BindInputComponent);
  Vue.component('BindSelectComponent', BindSelectComponent);
  Vue.component('DateComponent', DateComponent);
  Vue.component('DebouncedFnComponent', DebouncedFnComponent);
  Vue.component('DebounceComponent', DebounceComponent);
  Vue.component('LocalStorageComponent', LocalStorageComponent);
  Vue.component('ListComponent', ListComponent);
  Vue.component('StateComponent', StateComponent);
  Vue.component('EmbedComponent', EmbedComponent);
  Vue.component('ToggleDarkMode', ToggleDarkMode);
};
