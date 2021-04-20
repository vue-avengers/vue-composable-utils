<template>
  <div class="example-container">
    <div class="flex-container">
      <textarea rows="5" cols="50" placeholder="Place embed code here" v-model="code"></textarea>
      <button type="button" class="clear-button" @click="clear">Clear</button>
    </div>
    <div v-if="isEmbedBlock" v-html="code" class="embed-block"></div>
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

    return {
      code,
      clear,
      isEmbedBlock,
    };
  },
};
</script>

<style lang="scss" scoped>
$red: #e74c3c;
$grey: #2c3e50;
$white: #fff;

.example-container {
  .flex-container {
    display: flex;
    align-items: flex-end;

    textarea {
      border: 2px solid #8e44ad;
      padding: 0.8em 0.8em;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;
      color: #8e44ad;
    }

    .clear-button {
      border: solid $grey 1px;
      border-radius: 0.5em;
      color: $grey;
      background: none;
      padding: 0.5em 0.8em;
      margin-left: 0.5em;
      transition: 0.2s;
      &:hover {
        background-color: $red;
        color: $white;
        border: solid $red 1px;
      }
      &:focus {
        outline: none;
      }
    }
  }

  .embed-block {
    margin-top: 2em;
    margin-bottom: 2em;
  }
}
</style>
