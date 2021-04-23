# :sparkles: useStringCase

> `useStringCase` is a function that alters string predetermined cases of strings

## :convenience_store: State

The `useStringCase` function is used as the following reactive state:

```js
import { useStringCase } from 'vue-composable-utils';
const { string, camelCase } = useStringCase('');
```

## :rocket: Features

The initial value is sent to the function `useStringCase()`.

`useStringCase` has 4 reactive properties

1 - `this section will be update` --> The value that is going to be binded.

2 - `this section will be update` --> The value that is going to be changed.

3 - `this section will be update` --> The value that is going to be changed.

4 - `this section will be update` --> The value that is going to be changed.

## :computer: Example

You can see how it changes reactively using the example below.


```vue
<template>
  <div>
    <p>String: {{ string }}</p>
    <button class="btn" @click="camelCase">camelCase</button>
    <button class="btn" @click="kebabCase">kebab-case</button>
    <button class="btn" @click="pascalCase">Pascal case</button>
  </div>
</template>

<script>
import { useStringCase } from 'vue-composable-utils';
export default {
  setup() {
    const { string, setString, camelCase, kebabCase, pascalCase } = useStringCase('Hello World');

    return {
      string,
      setString,
      camelCase,
      kebabCase,
      pascalCase,
    };
  },
};
</script>
```

<ToggleDarkMode/>
