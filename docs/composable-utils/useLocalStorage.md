# :sparkles: useLocalStorage

> `useLocalStorage` is a function that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

## :convenience_store: State

The `useLocalStorage` function is used as the following reactive state:

```js
import { useLocalStorage } from 'vue-composable-utils';
const { value } = useLocalStorage('test', 1);
```

`import { useLocalStorage } from "vue-composable-utils";` function Example() { // Declare a new state variable, which we'll call `value` ` const { value } = useLocalStorage("test", 1);` We declare a state variable called count , and set it to 0 .

## :rocket: Features

`useLocalStorage` are functions that provide you with `"reactive"` `@vue/composition-api` and properties used as reactive.

- useLocalStorage: use `ref` and `readonly` from `@vue/composition-api`

## :computer: Example

You can see how it changes reactively using the example below.

<LocalStorageComponent />

```vue
<template>
  <div>
    <p>value is: {{ value }}</p>
    <button @click="value = '2'">Change</button>
  </div>
</template>

<script>
import { useLocalStorage } from 'vue-composable-utils';

export default {
  setup() {
    const { value } = useLocalStorage('test', 1);

    return { value };
  },
};
</script>
```

<ToggleDarkMode/>
