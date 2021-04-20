# :sparkles: useDebounce

> `useDebounce` function is used to wait for the given period of time before the next operation is run again. Limits the number of requests for the next operation.(eg. The operation is run after the given period of time regardless how many times the user clicks the button.)
## :convenience_store: Usage

The example usage of `useDebounce` function is shown below.

```js
import { useDebounce } from 'vue-composable-utils';
const { debounceVal, value, debounceListener } = useDebounce(1000);
```

## :rocket: Features

`useDebounce` has one parameter and three properties.

`Properties`

1 - `debounceVal` --> Final value after the given time.

2 - `value` --> The initial value that is inserted by the user.

3 - `debounceListener` --> Is used to assign `debounce` value at the end of given time.

`Parameter` --> `useDebounce(delay)`

1- `delay` --> The given period of time in milliseconds.

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
