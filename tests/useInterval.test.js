import { useInterval } from '@/';
import { ref } from '@vue/composition-api';
import { mount, createLocalVue } from '@vue/test-utils';
import { mountComposition } from './utils';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);

describe('useInterval', () => {
  let cb;

  beforeEach(() => {
    cb = jest.fn();
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    cb.mockRestore();
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const ms = -100;

  it('should be defined useInterval', () => {
    mount(
      mountComposition(() => {
        useInterval(ms);
      }),
    );
    expect(useInterval).toBeDefined();
  });

  it('should work date', async () => {
    const ms = 1000;
    const date = ref('00:00:00');
    const cb = jest.fn(() => (date.value = new Date().toLocaleTimeString()));
    const wrapper = mount(
      mountComposition(() => {
        const { start, stop } = useInterval(cb, ms);

        return { start, stop };
      }),
      { localVue },
    );
    expect(cb).not.toHaveBeenCalled();
    expect(setInterval).toHaveBeenCalledWith(cb, ms);

    wrapper.vm.start();
    expect(clearInterval).toHaveBeenCalled();
    expect(setInterval).toHaveBeenNthCalledWith(2, cb, ms);

    wrapper.vm.stop();

    expect(clearInterval).toHaveBeenCalledTimes(2);

    wrapper.vm.start();
    wrapper.vm.$destroy();

    expect(clearInterval).toHaveBeenCalledTimes(2);
  });

  it('should remove at unmount', () => {
    const ms = 100;

    const { vm } = mount(
      mountComposition(() => {
        useInterval(cb, ms);
      }),
      { localVue },
    );

    expect(cb).not.toHaveBeenCalled();
    expect(setInterval).toHaveBeenCalledWith(cb, ms);

    vm.$destroy();
    expect(clearInterval).toHaveBeenCalled();
  });

  it('should not start if no cb passed', () => {
    cb = jest.fn(x => x);
    const { vm } = mount(
      mountComposition(() => {
        useInterval(cb);
      }),
      { localVue },
    );

    expect(cb).not.toHaveBeenCalled();

    vm.$destroy();
  });

  it('should not start if no ms passed', () => {
    cb = jest.fn(x => x);
    const { vm } = mount(
      mountComposition(() => {
        useInterval(cb, ms);
      }),
      { localVue },
    );

    expect(cb).not.toHaveBeenCalled();

    vm.$destroy();
  });
});
