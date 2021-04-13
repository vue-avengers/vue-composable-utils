# :sparkles: useBind
> `useBind` is a function that allows you to have state variables in functional components.

## :convenience_store: State

The `useBind` function is used as the following reactive state:

```js
import { useBind } from "vue-composable-utils";
const { value, changed, reset } = useBind('Type a here....');
```


## :rocket: Features

`useBind` are functions that provide you with `"reactive"` `@vue/composition-api` and properties used as reactive.

- useBind: use `value`, `changed`  and `reset` from `@vue/composition-api`

## :computer: Example

You can see how it changes reactively using the example below.

```vue
<template>
  <div>
    <p>Input : {{ value }}</p>
    <input
    type="text"
     :value="value"
     @input="changed"
    />
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import { useBind } from "vue-composable-utils";

export default {
  setup() {
    const { value, changed, reset } = useBind('Type a here....');
    return { value, changed, reset };
  }
};
</script>
```

```vue
<template>
  <div>
      <p>Select : {{ value }}</p> 
      <div>
        <select @change="changed">
          <option value="apple">apple</option>
          <option value="orange">orange</option>
          <option value="strawberry">Strawberry</option>
        </select>
      </div>
  </div>
</template>

<script>
import { useBind } from "vue-composable-utils";

export default {
  setup() {
    const { value, changed, reset } = useBind('Type a here....');
    return { value, changed, reset };
  }
};
</script>

```
<ToggleDarkMode/>
