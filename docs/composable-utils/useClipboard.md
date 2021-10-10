# :sparkles: useClipboard

> `useClipboard()` function is used to make the clipboard copy function on your website or application.

## :maple_leaf: Usage

The `useClipboard` function is used as the following reactive state:

```js
import { useClipboard } from 'vue-composable-utils';
const { copy } = useClipboard();
```

## :rocket: Features

The `useClipboard` function has the `copy` feature. The `copy` property takes two parameters.

| Name    | Description                                                           |
| :------ | :-------------------------------------------------------------------- |
| `value` | The value to copy.                                                    |
| `ref`   | It is used to access the container class of the data we want to copy. |

## :bouquet: Example

You can see how it changes reactively using the example below.

<ClipboardComponent />

:::: tabs type:border-card
::: tab template lazy

```html
<template>
  <div class="clipboard" ref="clipboardRef">
    <div>
      <p>{{ copyText }}</p>
      <button class="btn" @click="onCopy">Copy</button>
    </div>
    <div>
      <input type="text" v-model="clipboardModel" />
      <button class="btn" @click="onCopyInput">Copy</button>
      <p>{{ clipboardModel }}</p>
    </div>
  </div>
</template>
```

:::
::: tab javascript lazy

```js
import { ref } from '@vue/composition-api';
import { useClipboard } from 'vue-composable-utils';

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
```

:::
::::

<ToggleDarkMode/>
