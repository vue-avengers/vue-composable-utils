# :sparkles: useEmbed

> `useEmbed` is a function that allows you to have state variables for embed code blocks in functional components.

## :maple_leaf: Usage

The `useEmbed` function is used as following reactive state:

```js
import { useEmbed } from 'vue-use-embed';

const { isEmbedBlock, clear } = useEmbed(code);
```

## :rocket: Features

`useEmbed` provides you `"reactive"` properties that allows you to manage your embed blocks.

- useEmbed: give as argument a reactive string that contains embed block code.

```js
const code = ref(null);

const { isEmbedBlock, clear } = useEmbed(code);
```

### :alembic: isEmbedBlock

`isEmbedBlock` is a computed that return the given code is an embed code or not.

:::: tabs type:border-card
::: tab template lazy

```html
<template>
  <div>
    <textarea rows="5" cols="50" placeholder="Place embed code here" v-model="code"></textarea>
    <button type="button" @click="clear">Clear</button>
    <div v-if="isEmbedBlock" v-html="code"></div>
  </div>
</template>
```

:::
::: tab javascript lazy

```js
<script>
import { useEmbed } from 'vue-use-embed';

export default {
  setup() {
    const code = ref(null);

    const { isEmbedBlock } = useEmbed(code);

    return {
      code,
      isEmbedBlock,
    };
  },
};
</script>
```

:::
::::

### :x: Clear

Clears scripts added to DOM.

:::: tabs type:border-card
::: tab template lazy

```html
<template>
  <div class="hello">
    <textarea rows="5" cols="50" placeholder="Place embed code here" v-model="code"></textarea>
    <button type="button" class="clear-button" @click="clear">Clear</button>
  </div>
</template>
```

:::
::: tab javascript lazy

```js
<script>
import { ref } from '@vue/composition-api';
import { useEmbed } from 'vue-use-embed';

export default {
  setup() {
    const code = ref(null);

    const { clear } = useEmbed(code);

    return {
      code,
      clear,
    };
  },
};
</script>
```

:::
::::

## :bouquet: Example

You can see how it changes reactively using the example below.

<EmbedComponent />

:::: tabs type:border-card
::: tab template lazy

```html
<template>
  <div class="example-container">
    <div class="flex-container">
      <textarea rows="5" cols="50" placeholder="Place embed code here" v-model="code"></textarea>
      <button type="button" class="clear-button" @click="clear">Clear</button>
    </div>
    <div v-if="isEmbedBlock" v-html="code" class="embed-block"></div>
  </div>
</template>
```

:::
::: tab javascript lazy

```js
<script>
import { ref } from '@vue/composition-api';
import { useEmbed } from 'vue-use-embed';

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

:::
::: tab scss lazy

```scss
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
      font-weight: 600;
    }

    .clear-button {
      border: solid $grey 1px;
      border-radius: 0.5em;
      color: $grey;
      background: none;
      font-weight: 600;
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
```

:::
::::

<ToggleDarkMode/>
