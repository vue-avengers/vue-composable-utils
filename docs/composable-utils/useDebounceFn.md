# :sparkles: useDebounceFn

> `useDebounceFn` function is used to wait for the given period of time before the next operation is run again. Limits the number of requests for the next operation.(eg. The operation is run after the given period of time regardless how many times the user clicks the button.)

## :convenience_store: Usage

The example usage of `useDebounceFn` function is shown below.

```js
import { ref } from 'vue';
import { useDebouncefn } from 'vue-composable-utils';
const updated = ref('');
const fn = e => (updated.value = e.target.value);
const debouncedFn = useDebouncefn({ delay: 1000, immediate: true }, fn);
```

## :rocket: Features

The `useDebounceFn` function takes two parameters, first one is an object `{delay: 1000, immediate: true}` and second one is a callback function.

`delay` --> The given period of time in milliseconds.

`immediate` --> If the value is `true` the function is triggered at the immediately.

`fn` --> The callback function that is executed after the debounce time.

## :computer: Example

You can see how it changes reactively using the example below.

<DebouncedFnComponent />

```vue
<template>
  <div>
    <p>Event handler : {{ updated }}</p>
    <input :value="updated" @input="debouncedFn" placeholder="input" />
    <input disabled placeholder="output" :value="updated" />
    <small>Delay is set to 1000ms.</small>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useDebounceFn } from 'vue-composable-utils';

export default {
  setup() {
    const updated = ref('');
    const fn = e => (updated.value = e.target.value);

    const debouncedFn = useDebounceFn({ delay: 1000, immediate: true }, fn);

    return { updated, debouncedFn };
  },
};
</script>

<style scoped>
input {
  margin: 0.5em;
  padding: 0.8em;
}
</style>
```

<ToggleDarkMode/>
