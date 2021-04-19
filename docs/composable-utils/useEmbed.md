# :sparkles: useEmbed

> `useEmbed` is a function that allows you to have state variables for embed code blocks in functional components.

## :convenience_store: State

The `useEmbed` function is used as following reactive state:

```js
import { useEmbed } from 'vue-composable-utils';

const { isEmbedBlock, clear } = useEmbed(code);
```

## :rocket: Features

`useEmbed` provides you `"reactive"` properties that allows you to manage your embed blocks.

- useEmbed: give as argument a reactive string that contains embed block code.

```js
const code = ref(null);

const { isEmbedBlock, clear } = useEmbed(code);
```

### isEmbedBlock

`isEmbedBlock` is a computed that return the given code is an embed code or not.

```vue
<template>
  <div>
    <textarea rows="5" cols="50" placeholder="Place embed code here" v-model="code"></textarea>
    <button type="button" @click="clear">Clear</button>
    <div v-if="isEmbedBlock" v-html="code"></div>
  </div>
</template>

<script>
import { useEmbed } from 'vue-composable-utils';

export default {
  name: 'EmbedComponent',
  setup() {
    const code = ref(null);

    const { isEmbedBlock } = useEmbed(code);

    return {
      code,
      isEmbedBlock
    }
  }
}
</script>
```

### Clear

Clears scripts added to DOM.

```vue
<template>
  <div class="hello">
    <textarea rows="5" cols="50" placeholder="Place embed code here" v-model="code"></textarea>
    <button type="button" class="clear-button" @click="clear">Clear</button>
  </div>
</template>

<script>
import  { ref } from '@vue/composition-api';
import { useEmbed } from 'vue-composable-utils';

export default {
  name: 'EmbedComponent',
  setup() {
    const code = ref(null);

    const { clear } = useEmbed(code);

    return {
      code,
      clear
    }
  }
}
</script>
```

## :computer: Example

You can see how it changes reactively using the example below.

<EmbedComponent />

<ToggleDarkMode/>
