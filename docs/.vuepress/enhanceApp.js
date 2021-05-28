import VueCompositionAPI from '@vue/composition-api';
import EmbedComponent from './components/EmbedComponent.vue';
import ToggleDarkMode from './components/ToggleDarkMode.vue';
import './public/style/main.css';

export default ({ Vue }) => {
  Vue.use(VueCompositionAPI);
  Vue.component('EmbedComponent', EmbedComponent);
  Vue.component('ToggleDarkMode', ToggleDarkMode);
};
