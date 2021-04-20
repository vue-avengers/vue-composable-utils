import { useState } from '@/';
import { mount, createLocalVue } from '@vue/test-utils';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);

const mocksList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const StateComponent = localVue.component('state-component', {
  setup() {
    const [count, setCount] = useState(0);
    return { count, setCount };
  },
  template: `
    <div>
    <p>Count: {{ count }}</p>
    <button class="increment" @click="setCount(count + 1)">Increment</button>
    <button class="decrement" @click="setCount(count - 1)">Decrement</button>
  </div>
        `,
});

describe('useState', () => {
  it('should be defined useState', () => {
    expect(useState).toBeDefined();
  });

  it('should get count value when trigger method', async () => {
    const wrapper = mount(StateComponent);
    await localVue.nextTick(() => {
      wrapper.vm.setCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    expect(wrapper.vm.count).toEqual(mocksList);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should increments count value on click', async () => {
    const wrapper = mount(StateComponent);
    expect(wrapper.html()).toContain('Count: 0');
    await wrapper.find('.increment').trigger('click');
    expect(wrapper.html()).toContain('Count: 1');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should decrements count value on click', async () => {
    const wrapper = mount(StateComponent);
    await localVue.nextTick(() => {
      wrapper.vm.setCount(0);
    });
    expect(wrapper.html()).toContain('Count: 0');
    await wrapper.find('.decrement').trigger('click');
    expect(wrapper.html()).toContain('Count: -1');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
