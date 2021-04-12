import { useDebounceFn } from '@/';
import { mount, createLocalVue } from '@vue/test-utils';
import { mountComposition } from './utils';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);

describe('useDebounceFn tests', () => {
  it('should be defined useDebounceFn', () => {
    expect(useDebounceFn).toBeDefined();
  });

  it('should calls fn method immediately if value of immediate is true', async () => {
    jest.useFakeTimers();

    const val = 1;
    const fn = jest.fn(value => value);
    const debouncedFn = useDebounceFn(
      {
        delay: 1000,
        immediate: true,
      },
      fn,
    );
    const result = await debouncedFn(val);

    expect(fn).toBeCalledWith(val);
    expect(result).toBe(val);
    expect(clearTimeout).toHaveBeenCalledTimes(0);
    expect(setTimeout).toHaveBeenCalledTimes(0);

    jest.useRealTimers();
  });

  it('should calls fn method after given delay', done => {
    expect.assertions(2);

    const val = 1;
    const fn = jest.fn(value => value);

    const debouncedFn = useDebounceFn(
      {
        delay: 1000,
        immediate: false,
      },
      fn,
    );

    debouncedFn(val).then(() => {
      expect(fn).toBeCalledTimes(1);
      expect(fn).toBeCalledWith(val);
      done();

      return null;
    });
  });

  it('should calls fn method only once within given delay', done => {
    expect.assertions(3);

    const val = 1;
    const val2 = 2;
    const fn = jest.fn(value => value);

    const wrapper = mount(
      mountComposition(() => {
        const debouncedFn = useDebounceFn(
          {
            delay: 1000,
            immediate: false,
          },
          fn,
        );
        return { debouncedFn };
      }),
      { localVue },
    );

    localVue.nextTick(() => {
      wrapper.vm.debouncedFn(val);
    });

    setTimeout(() => {
      wrapper.vm.debouncedFn(val2).then(() => {
        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith(val2);
        done();

        return null;
      });
    }, 500);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
