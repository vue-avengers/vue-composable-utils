# :sparkles: useQueue

> `useQueue` is a function that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

## :sparkles: State

The `useQueue` function is used as the following reactive state:

```js
import { useQueue } from 'vue-composable-utils';
const { set, state, remove, first, last, size } = useQueue([
    { id: 1, name: 'John', age: 25, occupation: 'gardener' },
    { id: 2, name: 'Lenny', age: 51, occupation: 'programmer' },
    { id: 3, name: 'Andrew', age: 43, occupation: 'teacher' },
    { id: 4, name: 'Peter', age: 52, occupation: 'gardener' },
    { id: 5, name: 'Anna', age: 43, occupation: 'teacher' },
    { id: 6, name: 'Albert', age: 46, occupation: 'programmer' },
    { id: 7, name: 'Adam', age: 47, occupation: 'teacher' },
    { id: 8, ame: 'Robert', age: 32, occupation: 'driver' },
  ]);
```

`import { useQueue } from "vue-composable-utils"` function Example() { // Declare a new state variable, which we'll call `count` `const [count, setCount] = useState(0);` We declare a state variable called count , and set it to 0 .

## :rocket: Features

`useQueue` are functions that provide you with `"reactive"` `@vue/composition-api` and properties used as reactive.

- useQueue: use `ref` and `readonly` from `@vue/composition-api`

## :computer: Example

You can see how it changes reactively using the example below.

<QueueComponent />

```vue
<template>
   <div>
      <p>First: {{first}}</p>
      <p>Last: {{last}}</p>
      <p>Size: {{size}}</p>
      <button @click="set([...state, ...data])">Add</button>
      <button @click="remove()">Remove</button>
    </div>
</template>

<script>
import { useQueue } from "vue-composable-utils";

export default {
  setup() {
  const data = [{ id: 9, name: 'John', age: 15, occupation: 'gardener' }, { id: 10, name: 'Lenny', age: 51, occupation: 'programmer' }]
  const { set, state, remove, first, last, size } = useQueue([
      { id: 1, name: 'John', age: 25, occupation: 'gardener' },
      { id: 2, name: 'Lenny', age: 51, occupation: 'programmer' },
      { id: 3, name: 'Andrew', age: 43, occupation: 'teacher' },
      { id: 4, name: 'Peter', age: 52, occupation: 'gardener' },
      { id: 5, name: 'Anna', age: 43, occupation: 'teacher' },
      { id: 6, name: 'Albert', age: 46, occupation: 'programmer' },
      { id: 7, name: 'Adam', age: 47, occupation: 'teacher' },
      { id: 8, ame: 'Robert', age: 32, occupation: 'driver' },
    ]);

    return { data, set, state, remove, first, last, size };
  }
};
</script>
```

<ToggleDarkMode/>
