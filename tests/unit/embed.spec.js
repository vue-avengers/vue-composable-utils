import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { mount, createLocalVue } from '@vue/test-utils';
import { useEmbed } from '@/';

Vue.use(VueCompositionAPI);

const localVue = createLocalVue();
localVue.component('embed-component', {
  template: `
    <div>
      <textarea v-model="embed"></textarea>
      <div v-if="useEmbed(embed).isEmbedBlock.value" id="embed-preview" v-html="embed"></div>
    </div>
  `,
});

const Component = localVue.component('embed-component');

describe('use embed composable tests', () => {
  test('embed preview have to be rendered if embed block computed is true', () => {
    const wrapper = mount(Component, {
      data: () => ({
        embed:
          '<blockquote class="twitter-tweet"></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8">',
      }),
      mocks: {
        useEmbed,
      },
    });

    expect(wrapper.find('#embed-preview').exists()).toBe(true);
  });

  test('embed preview have to be not rendered if embed block computed is false', () => {
    const wrapper = mount(Component, {
      data: () => ({
        embed: '',
      }),
      mocks: {
        useEmbed,
      },
    });

    expect(wrapper.find('#embed-preview').exists()).toBe(false);
  });

  test('getEmbedScriptSrc should return the src attribute of script tag in embed code', () => {
    const wrapper = mount(Component, {
      data: () => ({
        embed:
          '<blockquote class="twitter-tweet"></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8">',
      }),
      mocks: {
        useEmbed,
      },
    });

    const umbed = useEmbed(wrapper.vm.embed);
    const scriptSrc = umbed.isEmbedBlock.value;

    expect(scriptSrc).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  //   test('injectScript should mount script to the DOM', () => {
  //     const wrapper = mount(Component, {
  //       data: () => ({
  //         embed: 'https://platform.twitter.com/widgets.js',
  //       }),
  //       mocks: {
  //         useEmbed,
  //       },
  //     });

  //     const umbed = useEmbed();
  //     console.log('umbed:', umbed);
  //     umbed.injectScript({ id: 'twitter-embed', src: 'https://platform.twitter.com/widgets.js' });

  //     const script = document.getElementById('twitter-embed');

  //     expect(script).toBeTruthy();
  //     expect(wrapper.html()).toMatchSnapshot();
  //   });

  //   test('clearScript should remove script tag that passed as argument', () => {
  //     mount(Component, {
  //       data: () => ({
  //         embed: 'https://platform.twitter.com/widgets.js',
  //       }),
  //       mocks: {
  //         useEmbed,
  //       },
  //     });

  //     const umbed = useEmbed();
  //     umbed.injectScript({ id: 'twitter-embed', src: 'https://platform.twitter.com/widgets.js' });

  //     embed.clearScript(document.getElementById('twitter-embed'));

  //     expect(document.getElementById('twitter-embed')).toBeFalsy();
  //   });
});
