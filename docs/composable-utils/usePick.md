# :sparkles: usePick

> `usePick` is a function that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

## :sparkles: State

The `useState` function is used as the following reactive state:

```js
import { usePick } from 'vue-composable-utils';
const pick = usePick({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'd']);
```

`import { usePick } from "vue-composable-utils"` function Example() { // Declare a new state variable, which we'll call `pick` ` const pick = usePick({a: 1,b: 2,c: 3,d: 4,},["a", "d"]);` We declare a state variable called count , and set it to 0 .

## :rocket: Features

`usePick` are functions that provide you with `"reactive"` `@vue/composition-api` and properties used as reactive.

- usePick: use `ref` and `readonly` from `@vue/composition-api`

## :computer: Example

You can see how it changes reactively using the example below.

<PickComponent />

```vue
<template>
  <p>{{ JSON.stringify(pick) }}</p>
</template>

<script>
import { usePick } from '../../../src';

export default {
  setup() {
    const pick = usePick(
      {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      },
      ['a', 'd'],
    );

    return {
      pick,
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
}
</style>
```

<ToggleDarkMode/>
