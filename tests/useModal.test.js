import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { mount, createLocalVue } from '@vue/test-utils';
import { useModal } from '@/';

Vue.use(VueCompositionAPI);

const localVue = createLocalVue();
const Component = localVue.component('modal-component', {
  setup() {
    const initModal = {
      username: '',
      email: '',
      password: '',
    };

    const { visible, current, openModal, closeModal } = useModal(initModal);

    return {
      visible,
      current,
      openModal,
      closeModal,
    };
  },
  template: `
    <div>
      <button class="sign-up-button" @click="openModal(current)">Sign Up</button>

      <div class="modal" v-if="visible">
        <input type="text" class="username" v-model="current.username" />
        <input type="mail" v-model="current.email" />
        <input type="password" v-model="current.password" />

        <button class="close-button" @click="closeModal">Close</button>
      </div>
    </div>
  `,
});

describe('use modal composable tests', () => {
  test('clicking the sign up button triggers openModal method', async () => {
    const wrapper = mount(Component);

    const button = wrapper.find('.sign-up-button');

    await button.trigger('click');

    expect(wrapper.vm.visible).toBe(true);
    expect(wrapper.get('.modal'));
  });

  test('clicking the close button closes the modal', async () => {
    const wrapper = mount(Component);

    const signup = wrapper.find('.sign-up-button');
    await signup.trigger('click');

    const button = wrapper.find('.close-button');
    await button.trigger('click');

    expect(wrapper.vm.visible).toBe(false);
    expect(wrapper.find('.modal').exists()).toBe(false);
  });

  test('the changes on the modal object updates the current modal', async () => {
    const wrapper = mount(Component);

    const signup = wrapper.find('.sign-up-button');
    await signup.trigger('click');

    const input = wrapper.find('.username');

    input.setValue('Joe William');

    expect(wrapper.vm.current.username).toBe('Joe William');
  });
});
