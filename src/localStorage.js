import { ref, onMounted, onUnmounted, watchEffect } from '@vue/composition-api';

export function useLocalStorage(storageKey, defaultValue = '') {
  const value = ref(null);
  const init = () => {
    const item = localStorage.getItem(storageKey);
    if (item !== null) {
      value.value = parseItem(item);
      return;
    }

    value.value = defaultValue;
  };

  const parseItem = item => {
    let value = null;
    try {
      value = JSON.parse(item);
    } catch {
      value = item;
    }

    return value;
  };

  const handler = event => {
    if (event.key === storageKey) {
      value.value = event.newValue ? parseItem(event.newValue) : null;
    }
  };

  let initialized = false;

  if (typeof window !== 'undefined') {
    init();
    initialized = true;
  }

  onMounted(() => {
    if (!initialized) {
      init();
    }

    window.addEventListener('storage', handler, true);
  });

  watchEffect(() => {
    if (value.value) {
      localStorage.setItem(storageKey, JSON.stringify(value.value));
    }
  });

  onUnmounted(() => {
    window.removeEventListener('storage', handler);
  });

  return {
    value,
  };
}
