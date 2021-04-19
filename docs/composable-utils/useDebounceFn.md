# :sparkles: useDebounceFn

> `useState` is a function that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

## :convenience_store: Usage

The `UseDebounceFn` function is used as the following reactive state:

```js
import { ref } from 'vue';
import { useDebouncefn } from 'vue-composable-utils';
const updated = ref('');
const fn = e => (updated.value = e.target.value);
const debouncedFn = useDebouncefn({ delay: 1000, immediate: true }, fn);
```

## :rocket: Features

`useDebounceFn` fonksiyonu nesne içerisinde iki parametre `{delay: 1000, immediate: true}` özelliklerini içerir ve callback fonksiyon alır.

`delay` --> Milisaniye cinsinden geçikme süresidir.

`immediate` --> Eğer immediate true ise fonksiyon hemen tetiklenir.

`fn` --> Debounce zamanından sonra yürütmek istediğimiz callback fonksiyondur.

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
