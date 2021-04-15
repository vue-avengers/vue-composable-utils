import Vue from 'vue';
import VueCompositionAPI, { ref } from '@vue/composition-api';
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
        embed: ref(
          '<blockquote class="twitter-tweet"></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8">',
        ),
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
        embed: ref(
          '<blockquote class="twitter-tweet"></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8">',
        ),
      }),
      mocks: {
        useEmbed,
      },
    });

    const { getEmbedScriptSrc } = useEmbed(wrapper.vm.embed);
    const scriptSrc = getEmbedScriptSrc();

    expect(scriptSrc).toBe('https://platform.twitter.com/widgets.js');
  });

  test('injectScript should mount script to the DOM', () => {
    const { injectScript } = useEmbed();
    injectScript({ id: 'twitter-embed', src: 'https://platform.twitter.com/widgets.js' });

    const script = document.getElementById('twitter-embed');

    expect(script).toBeTruthy();
  });

  test('clearScript should remove script tag that passed as argument', () => {
    const { injectScript, clearScript } = useEmbed();
    injectScript({ id: 'twitter-embed', src: 'https://platform.twitter.com/widgets.js' });

    clearScript(document.getElementById('twitter-embed'));

    expect(document.getElementById('twitter-embed')).toBeFalsy();
  });

  test('clear method should remove all embed scripts', () => {
    const { injectScript, clear } = useEmbed();
    injectScript({ id: 'twitter-embed', src: 'https://platform.twitter.com/widgets.js' });
    injectScript({ id: 'instagram-embed', src: '//platform.instagram.com/en_US/embeds.js' });

    clear();

    expect(document.getElementById('twitter-embed')).toBeFalsy();
    expect(document.getElementById('instagram-embed')).toBeFalsy();
  });

  test('registerWatcher method should add watch with a given callback function', () => {
    const wrapper = mount(Component, {
      data: () => ({
        embed: ref(
          '<blockquote class="twitter-tweet"></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8">',
        ),
      }),
      mocks: {
        useEmbed,
      },
    });

    const { registerWatcher, getEmbedScriptSrc, injectScript } = useEmbed(wrapper.vm.embed);

    registerWatcher(newValue => {
      if (newValue) {
        const src = getEmbedScriptSrc(newValue);
        injectScript({ id: 'instagram-embed', src });
      }
    });

    wrapper.vm.embed.value = '<script async src="//platform.instagram.com/en_US/embeds.js" charset="utf-8">';
    const embed = wrapper.find('#instagram-embed');

    expect(embed).toEqual(expect.objectContaining({ selector: '#instagram-embed' }));
  });
});
