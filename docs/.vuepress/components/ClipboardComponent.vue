<template>
  <div class="clipboard" ref="clipboardRef">
    <div class="text">
      <p>{{ copyText }}</p>
      <button class="fourth" @click="onCopy">Copy</button>
    </div>
    <div>
      <input type="text" v-model="clipboardModel" />
      <button class="fourth" @click="onCopyInput">Copy</button>
      <p v-if="clipboardModel">{{ clipboardModel }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useClipboard } from '../../../src';

export default {
  name: 'ClipboardComponent',
  setup() {
    const clipboardRef = ref(null);
    const clipboardModel = ref(null);
    const copyText = ref('Kopyalanmak istenilen veri...');

    const { copy } = useClipboard();

    const onCopy = () => {
      copy(copyText.value, clipboardRef.value);
    };

    const onCopyInput = () => {
      copy(clipboardModel.value, clipboardRef.value);
    };

    return {
      copy,
      onCopy,
      copyText,
      onCopyInput,
      clipboardRef,
      clipboardModel,
    };
  },
};
</script>

<style lang="scss" scoped>
$red: #e74c3c;
$yellow: #f1c40f;

.clipboard {
  .text {
    display: flex;
  }
}

p {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 4px solid #c9c9c9;
  color: #666;
  font-family: monospace;
  padding: 1em 1.5em;
  display: block;
}

input {
  border: 2px solid #8e44ad;
  padding: 0.8em 0.8em;
  text-decoration: none;
  font-weight: 700;
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
  // display: flex;
  align-self: center;
  line-height: 1;
  margin: 10px;
  padding: 0.8em 0.8em;
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

.fourth {
  border-color: $yellow;
  color: #000;
  background: {
    image: linear-gradient(45deg, $yellow 50%, transparent 50%);
    position: 100%;
    size: 400%;
  }
  transition: background 300ms ease-in-out;

  &:hover {
    color: #fff;
    background-position: 0;
  }
}
</style>
