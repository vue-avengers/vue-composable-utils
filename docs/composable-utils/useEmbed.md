# :sparkles: useEmbed

> `useEmbed` is a function that allows you to have state variables in functional components.

## :convenience_store: State

The `useEmbed` function is used as the following reactive state:

```js
import { ref, watch } from '@vue/composition-api';
import { useEmbed } from 'vue-composable-utils';
const { getEmbedScriptSrc, injectScript, isEmbedBlock, clearScript } = useEmbed(code);
```

## :rocket: Features

`useEmbed` are functions that provide you with `"reactive"` `@vue/composition-api` and properties used as reactive.

- useEmbed: use `isEmbedBlock`, `code` and `clear` from `@vue/composition-api`

## :computer: Example

You can see how it changes reactively using the example below.

<EmbedComponent />

```vue
<template>
  <div>
    <textarea rows="5" cols="50" placeholder="Place embed code here" v-model="code"></textarea>
    <button type="button" class="first" @click="clear">Clear</button>
    <div v-if="isEmbedBlock" v-html="code"></div>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api';
import { useEmbed } from 'vue-composable-utils';

export default {
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
```

<ToggleDarkMode/>
