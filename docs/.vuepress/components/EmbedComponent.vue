<template>
  <div>
    <textarea rows="5" cols="50" placeholder="Place embed code here" v-model="code"></textarea>
    <button type="button" class="first" @click="clear">Clear</button>
    <div v-if="isEmbedBlock" v-html="code" class="embed-block"></div><br />
    <small>Embed Example: {{ twitterEmbed }}</small>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useEmbed } from '../../../src';

export default {
  name: 'EmbedComponent',
  setup() {

    const code = ref(null);

    const { isEmbedBlock, clear } = useEmbed(code);

    const twitterEmbed = `<blockquote class="twitter-tweet">
      <p lang="tr" dir="ltr">Vue composable utils <a href="https://t.co/2zLCR4VjyR">pic.twitter.com/0xNpVFMuxE</a></p>
      &mdash; VueComposableUtils (@VueComposableUtils) <a href="https://twitter.com/VueComposableUtils/status/1383062695537217537?ref_src=twsrc%5Etfw">April 16, 2021</a>
      </blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8">`;

    return {
      code,
      clear,
      isEmbedBlock,
      twitterEmbed
    }
  }
}
</script>

<style lang="scss" scoped>
$red: #e74c3c;
textarea {
  border: 2px solid #8e44ad;
  padding: 0.8em 0.8em;
  text-decoration: none;
  text-transform: uppercase;
  color: #8e44ad;
}
button {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid $red;
  border-radius: 0.6em;
  color: $red;
  cursor: pointer;
  align-self: center;
  line-height: 1;
  margin-left: 10px;
  padding: 1.2em 1.2em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12px;

  &:hover,
  &:focus {
    outline: 0;
  }
}

.first {
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    color: #fff;
    box-shadow: 0 0 40px 40px $red inset;
  }
}

.embed-block {
  margin-top: 2em;
  margin-bottom: 2em;
}

small {
  color: #a4a4a4;
}
</style>
