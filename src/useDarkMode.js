import { useState } from './useState';
import { onMounted, computed } from '@vue/composition-api';

/**
 * This function update value when another value changes (data-binding).
 * @param {initial} - The initial is the state used during the initial render.
 * @returns darkMode, setDarkMode
 */

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(null);

  const switchColor = mode => {
    const el = document.querySelector('body');
    if (mode) {
      localStorage.setItem('darkMode', true);
      el.classList.add('theme-dark');
    } else {
      localStorage.setItem('darkMode', false);
      el.classList.remove('theme-dark');
    }
  };
  const checkColor = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('darkMode') === null) {
      setDarkMode(true);
    }
  };

  onMounted(() => {
    if (localStorage.getItem('darkMode') == 'true') {
      const el = document.querySelector('body');
      el.classList.add('theme-dark');
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    checkColor();
  });

  const changeColor = computed({
    get() {
      return darkMode.value;
    },
    set(value) {
      switchColor(value);
    },
  });

  return {
    darkMode: changeColor,
    setDarkMode,
  };
};

export default useDarkMode;
