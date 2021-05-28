# :sparkles: useBind

> `useBind` is a function that binds data into component

## :maple_leaf: Usage

The `useBind` function is used as the following reactive state:

```js
import { useBind } from 'vue-composable-utils';
const { value, changed, reset } = useBind('Type a here....');
```

## :rocket: Features

The initial value is sent to the function `useBind()`.

`useBind` has 3 reactive properties

| Name      |                                Description |
| :-------- | -----------------------------------------: |
| `value`   |      The value that is going to be binded. |
| `changed` |     The value that is going to be changed. |
| `reset`   | The method that returns to initial values. |

## :bouquet: Example

You can see how it changes reactively using the example below.

<BindInputComponent />

:::: tabs type:border-card
::: tab template lazy

```html
<template>
  <div>
    <p>Input : {{ value }}</p>
    <input type="text" :value="value" @input="changed" />
    <button @click="reset">Reset</button>
  </div>
</template>
```

:::
::: tab javascript lazy

```js
import { useBind } from 'vue-composable-utils';

export default {
  setup() {
    const { value, changed, reset } = useBind('Type here....');
    return { value, changed, reset };
  },
};
```

:::
::::

<BindSelectComponent />

:::: tabs type:border-card
::: tab template lazy

```html
<template>
  <div>
    <p>Select : {{ value }}</p>
    <div>
      <select @change="changed">
        <option value="apple">apple</option>
        <option value="orange">orange</option>
        <option value="watermelon">Watermelon</option>
        <option value="strawberry">Strawberry</option>
      </select>
    </div>
  </div>
</template>
```

:::
::: tab javascript lazy

```js
import { useBind } from 'vue-composable-utils';

export default {
  setup() {
    const { value, changed, reset } = useBind('Type a here....');
    return { value, changed, reset };
  },
};
```

:::
::::

<ToggleDarkMode/>
