import { onMounted, onUnmounted, reactive, toRefs } from '@vue/composition-api';

const useResize = (el = null) => {
  let state = reactive({
    screenWidth: 0,
    screenHeight: 0,
    ratiowh: 0,
    ratiohw: 0,
    rect: undefined,
  });

  // eslint-disable-next-line no-unused-vars
  const onResize = event => {
    state.screenWidth = window.innerWidth;
    state.screenHeight = window.innerHeight;
    state.ratiowh = state.screenWidth / state.screenHeight;
    state.ratiohw = state.screenHeight / state.screenWidth;

    if (el && el.value) {
      const clientRect = el.value.getBoundingClientRect();
      state.rect = {
        width: clientRect.width,
        height: clientRect.height,
        left: clientRect.left,
        right: clientRect.right,
        top: clientRect.top,
        bottom: clientRect.bottom,
      };
    }
  };

  onMounted(() => {
    window.addEventListener('resize', onResize, false);
    onResize();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onResize, false);
  });

  return { ...toRefs(state) };
};

export default useResize;
