# :sparkles: UseDebounceFn
> `useState` is a function that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

## :convenience_store: State

The `UseDebounceFn` function is used as the following reactive state:

```js
import { ref } from "vue";
import { useDebouncefn } from "vue-composable-utils";
const updated = ref('');
const fn = (e) => updated.value = e.target.value;
const debouncedFn = useDebouncefn({ delay: 1000, immediate: true }, fn);
```

`import { UseDebounceFn } from "vue-composable-utils"` function Example() { // Declare a new state variable, which we'll call `count` ` const debouncedFn = useDebouncefn({ delay: 1000, immediate: true }, fn);` We declare a state variable called count , and set it to 0 .


## :rocket: Features

`UseDebounceFn` are functions that provide you with `"reactive"` `@vue/composition-api` and properties used as reactive.

- UseDebounceFn: use `ref` and `readonly` from `@vue/composition-api`

## :computer: Example

You can see how it changes reactively using the example below.

<DebouncedFn />

```vue
<template>
  <div>
    <p>Event handler : {{ updated }}</p>
    <input :value="updated" @input="debouncedFn" placeholder="input" />
    <input disabled placeholder="output" :value="updated"/>
    <small>Delay is set to 1000ms.</small>
  </div>
</template>

<script>
import { ref } from "vue";
import { useDebounceFn } from "vue-composable-utils";

export default {
  setup() {
    const updated = ref('');
    const fn = (e) => updated.value = e.target.value;

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
