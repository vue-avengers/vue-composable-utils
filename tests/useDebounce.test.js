import { useDebounce } from '@/';
import { mount, createLocalVue } from '@vue/test-utils';
import VueCompositionAPI from '@vue/composition-api';
import { mountComposition } from './utils';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);

const ms = 3000;

const DebounceComponent = localVue.component('debounce-component', {
  setup() {
    const { debounceVal, value, debounceListener } = useDebounce();

    return { debounceVal, value, debounceListener };
  },
  template: `
    <div>
    <p>deb : {{ value }}</p>
      <input
        type="text"
        :value="value"
        @input="debounceListener"
        placeholder="search here"
      />
      <p>debounceVal : {{ debounceVal }}</p>
    </div>
          `,
});

describe('useDebounce', () => {
  it('should be defined useDebounce', () => {
    mount(
      mountComposition(() => {
        useDebounce(ms);
      }),
    );
    expect(useDebounce).toBeDefined();
  });

  it('should get value when changed input with debounce', async function () {
    jest.useFakeTimers();

    const event = {
      target: { value: 'Set value' },
    };

    const mocksValue = 'Set value';
    const wrapper = mount(DebounceComponent);
    const textInput = wrapper.find('input[type="text"]');

    await textInput.setValue('Set value');

    expect(wrapper.find('input[type="text"]').element.value).toBe(mocksValue);
    wrapper.vm.debounceVal = mocksValue;
    wrapper.vm.debounceListener(event);

    setTimeout(() => {
      expect(wrapper.vm.debounceVal).toBe(mocksValue);
    }, 3000);

    jest.runAllTimers();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should set value when changed input with debounce time', async () => {
    const event = {
      target: { value: 'Set value' },
    };
    const wrapper = mount(DebounceComponent);
    const textInput = wrapper.find('input[type="text"]');
    await textInput.setValue('1');

    expect(wrapper.vm.value).toBe('1');

    wrapper.vm.debounceVal = '1';

    expect(wrapper.vm.debounceVal).toBe('1');
    wrapper.vm.debounceListener(event);

    jest.runTimersToTime(3);
    expect(wrapper.vm.debounceVal).toBe('1');

    expect(wrapper.html()).toMatchSnapshot();
  });
});
