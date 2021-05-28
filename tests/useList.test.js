import { useList } from '@/';
import { mount, createLocalVue } from '@vue/test-utils';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);

let mocksList;
const mocksListTwo = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const mocksListThree = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const mocksMixedList = [1, 4, 2, 10, 3, 6, 8, 5, 9, 7];

const ListComponent = localVue.component('list-component', {
  setup() {
    const { list, sort, set, reduce, first, deleteFirst, deleteLast, last, filter, push, reset } = useList(mocksList);

    return {
      list,
      set,
      reduce,
      sort,
      first,
      deleteFirst,
      deleteLast,
      last,
      filter,
      push,
      reset,
    };
  },
  template: `
  <div>
    <p>list: {{ JSON.stringify(list) }}</p>
    <button id="sort" @click="sort((a, b) => a - b)">Sort List</button>
    <button id="set" @click="set([...list, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])">Set list</button>
    <button id="max" @click="reduce((t, n) => Math.max(t, n))">Max list</button>
    <button @click="reduce((t, n) => (t.includes(n) ? t : [...t, n]))">Unique List</button>
    <button @click="reduce((t, n) => [n, ...t])">Reverse List</button>
    <button @click="reduce((t, n) => t.concat(n))">Flatten List</button>
    <button id="map" @click="reduce((t, n) => {t.push(n * 2); return t}, {})">Map List</button>
    <button id="deleteFirst" @click="deleteFirst">Delete First</button>
    <button id="deleteLast" @click="deleteLast">Delete Last</button>
    <button id="first" @click="first">First</button>
    <button id="last" @click="last">Last</button>
    <button id="filter" @click="filter((a) => a >= 4)">Greater than or equal to 4</button>
    <button id="push" @click="push(21, 22, 23, 24, 25, 26, 27, 28, 29, 30)">Push</button>
    <button id="reset" @click="reset">Reset</button>
  </div>
        `,
});

describe('useList', () => {
  it('should be defined useList', async () => {
    const wrapper = mount(ListComponent);
    await localVue.nextTick(() => {
      wrapper.vm.set();
    });
    expect(useList).toBeDefined();
  });

  it('should map list value when method', async () => {
    const wrapper = mount(ListComponent);
    await localVue.nextTick(() => {
      wrapper.vm.set({});
    });

    await wrapper.find('#map').trigger('click');
    expect(wrapper.vm.list).toEqual({});
  });

  it('should sort list value when method array empty', async () => {
    const wrapper = mount(ListComponent);
    await localVue.nextTick(() => {
      wrapper.vm.set('');
    });
    await wrapper.find('#sort').trigger('click');
    expect(wrapper.vm.list).toEqual([]);
  });

  it('should set list value when method', async () => {
    mocksList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const wrapper = mount(ListComponent);

    expect(wrapper.vm.list).toEqual(mocksList);
    await wrapper.find('#set').trigger('click');
    await localVue.nextTick(() => {
      wrapper.vm.set([...mocksList, ...mocksListTwo]);
    });
    expect(wrapper.vm.list).toEqual([...mocksList, ...mocksListTwo]);
    expect(wrapper.html()).toContain(`list: [${[...mocksList, ...mocksListTwo]}]`);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should sort list value when method', async () => {
    mocksList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const wrapper = mount(ListComponent);

    await localVue.nextTick(() => {
      wrapper.vm.set([...mocksMixedList]);
    });
    expect(wrapper.vm.list).toEqual(mocksMixedList);
    await wrapper.find('#sort').trigger('click');
    expect(wrapper.vm.list).toEqual(mocksList);
    expect(wrapper.html()).toContain(`list: [${[...mocksList]}]`);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should max list value when method', async () => {
    mocksList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const wrapper = mount(ListComponent);

    await wrapper.find('#max').trigger('click');
    expect(wrapper.vm.list).toBe(mocksList.reduce((t, n) => Math.max(t, n)));
    expect(wrapper.vm.list).toEqual(10);
    expect(wrapper.html()).toContain(`list: 10`);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should sort value when method', async () => {
    mocksList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const wrapper = mount(ListComponent);

    await localVue.nextTick(() => {
      wrapper.vm.set([...mocksMixedList]);
    });
    expect(wrapper.vm.list).toEqual(mocksMixedList);
    await wrapper.find('#sort').trigger('click');
    expect(JSON.stringify(wrapper.vm.list)).toBe(JSON.stringify(mocksMixedList.sort((a, b) => a - b)));
    expect(wrapper.vm.list).toEqual(mocksList);
    expect(wrapper.html()).toContain(`list: [${[...mocksList]}]`);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should filter value when method', async () => {
    mocksList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const wrapper = mount(ListComponent);

    await localVue.nextTick(() => {
      wrapper.vm.set([...mocksList, ...mocksListTwo]);
    });
    expect(wrapper.vm.list).toEqual([...mocksList, ...mocksListTwo]);
    await wrapper.find('#filter').trigger('click');
    expect(JSON.stringify(wrapper.vm.list)).toBe(JSON.stringify([...mocksList, ...mocksListTwo].filter(a => a >= 4)));
    expect(wrapper.vm.list).toEqual([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    expect(wrapper.html()).toContain(`list: ${JSON.stringify([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])}`);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should last first value when method', async () => {
    mocksList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const wrapper = mount(ListComponent);

    expect(wrapper.vm.list).toEqual(mocksList);
    await wrapper.find('#first').trigger('click');
    expect(wrapper.vm.list).toEqual(1);
    expect(wrapper.text()).toContain(`list: 1`);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should last list value when method', async () => {
    mocksList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const wrapper = mount(ListComponent);

    expect(wrapper.vm.list).toEqual(mocksList);
    await wrapper.find('#last').trigger('click');
    expect(wrapper.vm.list).toEqual(10);
    expect(wrapper.text()).toContain(`list: 10`);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should delete last list value when method', async () => {
    mocksList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const wrapper = mount(ListComponent);

    await localVue.nextTick(() => {
      wrapper.vm.set([1, 2, 3]);
    });

    expect(wrapper.vm.list).toEqual([1, 2, 3]);
    await wrapper.find('#deleteLast').trigger('click');
    expect(wrapper.vm.list).toEqual([1, 2]);
    await wrapper.find('#deleteLast').trigger('click');
    expect(wrapper.vm.list).toEqual([1]);
    expect(wrapper.text()).toContain(`list: ${JSON.stringify([1])}`);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should delete first list value when method', async () => {
    mocksList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const wrapper = mount(ListComponent);

    await localVue.nextTick(() => {
      wrapper.vm.set([1, 2, 3]);
    });

    expect(wrapper.vm.list).toEqual([1, 2, 3]);
    await wrapper.find('#deleteFirst').trigger('click');
    expect(wrapper.vm.list).toEqual([2, 3]);
    await wrapper.find('#deleteFirst').trigger('click');
    expect(wrapper.vm.list).toEqual([3]);
    expect(wrapper.text()).toContain(`list: ${JSON.stringify([3])}`);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should push value when method', async () => {
    mocksList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const wrapper = mount(ListComponent);

    await localVue.nextTick(() => {
      wrapper.vm.set([...mocksList, ...mocksListTwo]);
    });
    expect(wrapper.vm.list).toEqual([...mocksList, ...mocksListTwo]);
    await wrapper.find('#push').trigger('click');
    wrapper.vm.push();
    expect(JSON.stringify(wrapper.vm.list)).toBe(JSON.stringify([...mocksList, ...mocksListTwo, ...mocksListThree]));
    expect(wrapper.vm.list).toEqual([...mocksList, ...mocksListTwo, ...mocksListThree]);
    expect(wrapper.html()).toContain(`list: ${JSON.stringify([...mocksList, ...mocksListTwo, ...mocksListThree])}`);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should reset value when method', async () => {
    mocksList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const wrapper = mount(ListComponent);
    await wrapper.find('#reset').trigger('click');
    await localVue.nextTick(() => {
      wrapper.vm.set([]);
    });
    expect(JSON.stringify(wrapper.vm.list)).toBe(JSON.stringify([]));
    expect(wrapper.html()).toMatchSnapshot();
  });
});
