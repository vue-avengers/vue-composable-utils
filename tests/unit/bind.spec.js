import { useBind } from '@/';
import { mount, createLocalVue } from '@vue/test-utils';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);

const mocksValue = 'Type a here...';

const InputComponent = localVue.component('input-component', {
  setup() {
    const { value, setValue, changed, reset } = useBind('Type a here...');
    return { value, setValue, changed, reset };
  },
  template: `
    <div>
    <p>Input: {{ value }}</p>
    <input
    type="text"
     :value="value"
     @input="changed"
    />
    <button @click="reset">Reset</button>
  </div>
        `,
});

describe('useBind', () => {
  it('should be defined useBind', () => {
    expect(useBind).toBeDefined();
  });

  it('should reset value when method', async () => {
    const wrapper = mount(InputComponent);

    expect(wrapper.find('input[type="text"]').element.value).toEqual(mocksValue);
    const textInput = wrapper.find('input[type="text"]');
    await textInput.setValue('Set value');

    expect(wrapper.find('input[type="text"]').element.value).toBe('Set value');
    await wrapper.find('button').trigger('reset');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should get value when changed input', async () => {
    const wrapper = mount(InputComponent);
    wrapper.vm.setValue(100);
    const textInput = wrapper.find('input[type="text"]');
    textInput.element.value = wrapper.vm.value;
    textInput.trigger('change');

    expect(wrapper.find('input[type="text"]').element.value).toBe('100');
    wrapper.find('button').trigger('click');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('useState: increments count value on match object', async () => {
    const { value } = useBind(10);
    expect(value).toMatchObject({ value: 10 });
  });
});

const SelectComponent = localVue.component('select-component', {
  setup() {
    const { value, changed, reset } = useBind('Type a here...');
    return { value, changed, reset };
  },
  template: `
    <div>
        <div>
            <select @change="changed" multiple>
            <option value="apple">apple</option>
            <option value="orange">orange</option>
            <option value="strawberry">Strawberry</option>
            </select>
        </div>
        <p>select : {{ value }}</p>
    </div>
        `,
});

describe('useBind', () => {
  it('should get value when changed select', async () => {
    const wrapper = mount(SelectComponent);

    const multiselect = wrapper.find('select');
    await multiselect.setValue(['apple', 'orange', 'strawberry']);
    const selectedOptions = Array.from(multiselect.element.selectedOptions).map(o => o.value);
    expect(selectedOptions).toEqual(['apple', 'orange', 'strawberry']);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
