# :sparkles: useBind

> `useBind` is a function that binds data into component

## :convenience_store: State

The `useBind` function is used as the following reactive state:

```js
import { useBind } from 'vue-composable-utils';
const { value, changed, reset } = useBind('Type a here....');
```

## :rocket: Features

The initial value is sent to the function `useBind()`.

`useBind` has 3 reactive properties

1 - `value` --> The value that is going to be binded.

2 - `changed` --> The value that is going to be changed.

3 - `reset` --> The method that returns to initial values.

## :computer: Example

You can see how it changes reactively using the example below.

<BindInputComponent />

```vue
<template>
  <div>
    <p>Input : {{ value }}</p>
    <input type="text" :value="value" @input="changed" />
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import { useBind } from 'vue-composable-utils';

export default {
  setup() {
    const { value, changed, reset } = useBind('Type here....');
    return { value, changed, reset };
  },
};
</script>
```

<BindSelectComponent />

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
import { useBind } from 'vue-composable-utils';

export default {
  setup() {
    const { value, changed, reset } = useBind('Type a here....');
    return { value, changed, reset };
  },
};
</script>
```

<ToggleDarkMode/>
