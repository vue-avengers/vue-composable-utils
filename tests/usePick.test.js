import { usePick } from '@/';
import { mount, createLocalVue } from '@vue/test-utils';
import { mountComposition } from './utils';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);

const obj = { a: 1, b: 2, c: 3, d: 4 };
const mock = { a: 1, d: 4 };
let arr = ['a', 'd'];

const PickComponent = localVue.component('pick-component', {
  setup() {
    const pick = usePick(obj, arr);

    return {
      pick,
    };
  },
  template: `
    <div>
    <p>Pick: {{ JSON.stringify(pick) }}</p>
  </div>
        `,
});

describe('usePick', () => {
  it('should be defined useState', () => {
    expect(usePick).toBeDefined();
  });

  it('should get pick value', async () => {
    const wrapper = mount(PickComponent);
    expect(wrapper.vm.pick).toEqual(mock);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should get count value when trigger method', async () => {
    arr = [];
    const wrapper = mount(
      mountComposition(() => {
        const pick = usePick(obj, arr);

        return {
          pick,
        };
      }),
      { localVue },
    );

    expect(wrapper.vm.pick).toEqual({});
  });

  it('should get pick object empty', async () => {
    const wrapper = mount(
      mountComposition(() => {
        const pick = usePick(obj);

        return {
          pick,
        };
      }),
      { localVue },
    );

    expect(wrapper.vm.pick).toEqual({});
  });

  it('should get pick object array', async () => {
    const wrapper = mount(
      mountComposition(() => {
        const pick = usePick([]);

        return {
          pick,
        };
      }),
      { localVue },
    );

    expect(wrapper.vm.pick).toEqual([]);
  });

  it('should get pick object equal one', async () => {
    const wrapper = mount(
      mountComposition(() => {
        const pick = usePick(obj, { a: 'b' });

        return {
          pick,
        };
      }),
      { localVue },
    );

    expect(wrapper.vm.pick).toEqual({ b: 1 });
  });
});
