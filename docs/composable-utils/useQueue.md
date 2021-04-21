# :sparkles: useQueue

> The `useQueue()` function determines how data is applied to the queue using data structures and array type methods. FIFO (first-in, first-out) and LIFO (last-in, first-out) data structures are used.

## :sparkles: Usage

The example usage of `useQueue` function is shown below.

```js
import { useQueue } from 'vue-composable-utils';
const { set, state, remove, first, last, size } = useQueue([
  { id: 1, name: 'Rukiye', age: 25, occupation: 'analyst' },
  { id: 2, name: 'Lenny', age: 51, occupation: 'programmer' },
  { id: 3, name: 'Andrew', age: 43, occupation: 'teacher' },
  { id: 4, name: 'Peter', age: 52, occupation: 'gardener' },
  { id: 5, name: 'Anna', age: 43, occupation: 'teacher' },
  { id: 6, name: 'Albert', age: 46, occupation: 'programmer' },
  { id: 7, name: 'Adam', age: 47, occupation: 'teacher' },
  { id: 8, ame: 'Robert', age: 32, occupation: 'driver' },
]);
```

## :rocket: Features

`useQueue` has one parameters. --> `useQueue()`

| Parameters | Description                                               |
| :--------- | :-------------------------------------------------------- |
| `set`      | Inserts object to the array.                              |
| `state`    | It is the object that keeps the value that can be changed |
| `remove`   | Is used to remove the initial value                       |
| `first`    | Gives the initial value                                   |
| `last`     | Gives the last value                                      |
| `size`     | Gives the size of the array                               |

## :computer: Example

You can see how it changes reactively using the example below.

<QueueComponent />

```vue
<template>
  <div>
    <p>First: {{ first }}</p>
    <p>Last: {{ last }}</p>
    <p>Size: {{ size }}</p>
    <button @click="set([...state, ...data])">Add</button>
    <button @click="remove()">Remove</button>
  </div>
</template>

<script>
import { useQueue } from 'vue-composable-utils';

export default {
  setup() {
    const data = [
      { id: 9, name: 'John', age: 15, occupation: 'gardener' },
      { id: 10, name: 'Lenny', age: 51, occupation: 'programmer' },
    ];
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
  },
};
</script>
```

You can see how it changes reactively using the example below.

<QueueComponentTwo />

```vue
<template>
  <div>
    <p>First: {{ first }}</p>
    <p>Last: {{ last }}</p>
    <p>Size: {{ size }}</p>
    <button @click="set([...state, (last || 0) + 1])">Add</button>
    <button @click="remove()">Remove</button>
  </div>
</template>

<script>
import { useQueue } from 'vue-composable-utils';

export default {
  setup() {
    const { set, state, remove, first, last, size } = useQueue();

    return { set, state, remove, first, last, size };
  },
};
</script>
```

<ToggleDarkMode/>
