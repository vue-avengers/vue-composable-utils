import Vue from 'vue';
import VueCompositionAPI, { ref } from '@vue/composition-api';
import { mount, createLocalVue } from '@vue/test-utils';
import { useProvideInject } from '@/';

Vue.use(VueCompositionAPI);

const localVue = createLocalVue();

const ChildComponent = localVue.component('inject-component', {
  setup() {
    const { useInject } = useProvideInject();

    return {
      avatar: useInject('avatar'),
    };
  },
  template: '<img :src="avatar"',
});

const ParentComponent = localVue.component('provide-component', {
  components: {
    ChildComponent,
  },
  setup() {
    const { useProvide } = useProvideInject();
    const avatar = ref('https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png');

    useProvide('avatar', avatar);

    return {
      avatar,
    };
  },
  template: '<child-component />',
});

describe('use provide-inject composable tests', () => {
  test('child component should be able to inject the provided avatar', () => {
    const parentWrapper = mount(ParentComponent);
    const childWrapper = parentWrapper.findComponent(ChildComponent);

    expect(childWrapper.vm.avatar).toBe(parentWrapper.vm.avatar);
  });

  test("when the avatar url changes the child components' avatar should also be changed", () => {
    const parentWrapper = mount(ParentComponent);
    const childWrapper = parentWrapper.findComponent(ChildComponent);

    parentWrapper.setData({ avatar: 'avatar.jpeg' });

    expect(childWrapper.vm.avatar).toBe(parentWrapper.vm.avatar);
  });
});
