import VueCompositionAPI from '@vue/composition-api';
import { mount, createLocalVue } from '@vue/test-utils';
import { mountComposition } from './utils';
import { useLocalStorage } from '@/';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);

const mock = {
  key: 'test',
  value: 'value',
};

beforeEach(() => {
  window.localStorage.clear();
});

describe('useLocalStorage', () => {
  it('should be defined useLocalStorage', () => {
    expect(useLocalStorage).toBeDefined();
  });

  it('should get localStorage value', () => {
    window.localStorage.setItem(mock.key, mock.value);
    const { vm } = mount(
      mountComposition(() => {
        const { value } = useLocalStorage(mock.key);
        return { value };
      }),
      { localVue },
    );
    localVue.nextTick();
    expect(vm.value).toEqual(mock.value);
    vm.$destroy();
  });

  it('should set localStorage value', () => {
    const { vm } = mount(
      mountComposition(() => {
        const { value } = useLocalStorage(mock.key, mock.value);
        return { value };
      }),
      { localVue },
    );
    localVue.nextTick();
    expect(vm.value).toEqual(mock.value);
    vm.$destroy();
  });
});
