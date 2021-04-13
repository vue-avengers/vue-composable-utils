# :sparkles: useState
> `useState` is a function that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

## :convenience_store: State

The `useState` function is used as the following reactive state:

```js
import { useState } from "vue-composable-utils";
const [count, setCount] = useState();
```

`import { useState } from "vue-composable-utils"` function Example() { // Declare a new state variable, which we'll call `count` `const [count, setCount] = useState(0);` We declare a state variable called count , and set it to 0 .


## :rocket: Features

`useState` are functions that provide you with `"reactive"` `@vue/composition-api` and properties used as reactive.

- useState: use `ref` and `readonly` from `@vue/composition-api`

## :computer: Example

You can see how it changes reactively using the example below.

```vue
<template>
  <p>{{ count }}</p>
  <button @click="setCount(count - 1)">Decrement</button>
  <button @click="setCount(count + 1)">Increment</button>
</template>

<script>
import { useState } from "vue-composable-utils";

export default {
  setup() {
    const [count, setCount] = useState(0);

    return {
      count,
      setCount,
    };
  },
};
</script>
```
<ToggleDarkMode/>
