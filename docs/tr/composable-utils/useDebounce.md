# :sparkles: useDebounce

> `useState` is a function that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

## :convenience_store: State

The `UseDebounce` function is used as the following reactive state:

```js
import { useDebounce } from 'vue-composable-utils';
const { debounceVal, value, debounceListener } = useDebounce(1000);
```

`import { UseDebounce } from "vue-composable-utils"` function Example() { // Declare a new state variable, which we'll call `value` ` const { debounceVal, value, debounceListener } = useDebounce(1000);` We declare a state variable called count , and set it to 0 .

## :rocket: Features

`UseDebounce` are functions that provide you with `"reactive"` `@vue/composition-api` and properties used as reactive.

- UseDebounceFn: use `ref` and `readonly` from `@vue/composition-api`

## :computer: Example

You can see how it changes reactively using the example below.

<DebounceComponent />

```vue
<template>
  <div>
    <p>Value : {{ debounceVal }}</p>
    <input :value="value" @input="debounceListener" placeholder="search here" />
    <small>Delay is set to 1000ms.</small>
  </div>
</template>

<script>
import { useDebounce } from 'vue-composable-utils';

export default {
  name: 'Debounce',
  setup() {
    const { debounceVal, value, debounceListener } = useDebounce(1000);
    return {
      debounceVal,
      value,
      debounceListener,
    };
  },
};
</script>

<style scoped>
p {
  margin: 10px;
  padding: 0.8em 0.8em;
  text-transform: uppercase;
  font-weight: 700;
  color: #8e44ad;
}

input {
  border: 2px solid #8e44ad;
  margin: 10px;
  padding: 0.8em 0.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #8e44ad;
}
</style>
```

<ToggleDarkMode/>
