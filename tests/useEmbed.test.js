import Vue from 'vue';
import VueCompositionAPI, { ref } from '@vue/composition-api';
import { mount, createLocalVue } from '@vue/test-utils';
import { useEmbed } from '@/';

Vue.use(VueCompositionAPI);

const localVue = createLocalVue();
localVue.component('embed-component', {
  setup() {
    const embed = ref(null);
    const { isEmbedBlock, clear } = useEmbed(embed);

    return {
      embed,
      isEmbedBlock,
      clear,
    };
  },
  template: `
    <div>
      <textarea v-model="embed"></textarea>
      <div v-if="isEmbedBlock" id="embed-preview" v-html="embed"></div>
      <button @click="clear">Clear</button>
    </div>
  `,
});

const Component = localVue.component('embed-component');

describe('use embed composable tests', () => {
  test('embed preview have to be rendered if embed block computed is true', async () => {
    const wrapper = mount(Component);

    const textarea = wrapper.find('textarea');

    await textarea.setValue(
      '<blockquote class="twitter-tweet"></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8">',
    );

    expect(wrapper.find('#embed-preview').exists()).toBe(true);
  });

  test('embed preview have to be not rendered if embed block computed is false', async () => {
    const wrapper = mount(Component);

    const textarea = wrapper.find('textarea');

    await textarea.setValue('');

    expect(wrapper.find('#embed-preview').exists()).toBe(false);
  });

  test('clear method should remove all embed scripts', async () => {
    const wrapper = mount(Component);

    const textarea = wrapper.find('textarea');

    await textarea.setValue(
      '<blockquote></blockquote><script async src="//platform.instagram.com/en_US/embeds.js" charset="utf-8"></script>',
    );

    await wrapper.find('button').trigger('click');

    expect(wrapper.find('#embed-preview').exists()).toBe(false);
  });
});
