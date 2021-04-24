# :pencil: useList

> `useList()` is a function to be used to customized the array.

## :convenience_store: Usage

The example usage of `useList` function is shown below.

```js
import { useList } from 'vue-composable-utils';
const { list, sort, set, reduce, first, deleteFirst, deleteLast, last, filter, push, reset } = useList([
  5,
  1,
  4,
  7,
  10,
  4,
  9,
  6,
  2,
  5,
  8,
  3,
]);
```

## :rocket: Features

`useList` has one parameter. --> `useList([])`

| Parameters    | Description                                             |
| :------------ | :------------------------------------------------------ |
| `list`        | Gives the value of the list sent as parameter           |
| `sort`        | Sorts the list.                                         |
| `set`         | Gives the new list that is processed                    |
| `reduce`      | Performs the reduce process in the list.                |
| `first`       | Gives the fist value of the list.                       |
| `deleteFirst` | Removes the fist value of the list.                     |
| `deleteLast`  | Removes the last value of the list.                     |
| `last`        | Gives the last value of the list.                       |
| `filter`      | Gives the new list according to the specified condition |
| `push`        | Inserts the value to the end of the list                |
| `reset`       | Resets the list.                                        |

## :computer: Example

You can see how it changes reactively using the example below.

<ListComponent />

```vue
<template>
  <div>
    <p>list: {{ JSON.stringify(list) }}</p>
    <button @click="sort((a, b) => a - b)">Sort List</button>
    <button @click="set([...list, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])">Set list</button>
    <button
      @click="
        reduce((total, next) => {
          return total + next;
        })
      "
    >
      Sum list
    </button>
    <button @click="reduce((t, n) => Math.max(t, n))">Max list</button>
    <button @click="reduce((t, n) => (t.includes(n) ? t : [...t, n]))">Unique List</button>
    <button @click="reduce((t, n) => [n, ...t])">Reverse List</button>
    <button @click="set([[...list], [11, [12], 13], [14, [15], 16, 17], [18, [19], 20]])">Set Multi Array</button>
    <button @click="reduce((t, n) => t.concat(n))">Flatten List</button>
    <button
      @click="
        reduce((t, n) => {
          t.push(n * 2);
          return t;
        })
      "
    >
      Map List
    </button>
    <button @click="deleteFirst">Delete First</button>
    <button @click="deleteLast">Delete Last</button>
    <button @click="first">First</button>
    <button @click="last">Last</button>
    <button @click="filter(a => a >= 5)">Greater than or equal to 5</button>
    <button @click="push(11, 12, 13, 14, 15, 16, 17, 18, 19, 20)">Push</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import { useList } from 'vue-composable-utils';

export default {
  setup() {
    const { list, sort, set, reduce, first, deleteFirst, deleteLast, last, filter, push, reset } = useList([
      5,
      1,
      4,
      7,
      10,
      4,
      9,
      6,
      2,
      5,
      8,
      3,
    ]);

    return {
      list,
      set,
      reduce,
      sort,
      first,
      deleteFirst,
      deleteLast,
      last,
      filter,
      push,
      reset,
    };
  },
};
</script>
```

```vue
<template>
  <div>
    <p>list: {{ JSON.stringify(list) }}</p>
    <button @click="reduce((t, n) => [n, ...t])">Reverse List</button>
    <button @click="reduce((t, { id, ...attrs }) => ({ ...t, [id]: attrs }))">Convert array to object</button>
    <button @click="filter(u => u.occupation === 'programmer')">Occupation equal to programmer</button>
    <button @click="deleteFirst">Delete First</button>
    <button @click="deleteLast">Delete Last</button>
    <button @click="first">First</button>
    <button @click="last">Last</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import { useList } from 'vue-composable-utils';

export default {
  setup() {
    const { list, reduce, deleteFirst, deleteLast, first, last, filter, reset } = useList([
      { id: 1, name: 'John', age: 25, occupation: 'gardener' },
      { id: 2, name: 'Lenny', age: 51, occupation: 'programmer' },
      { id: 3, name: 'Andrew', age: 43, occupation: 'teacher' },
      { id: 4, name: 'Peter', age: 52, occupation: 'gardener' },
      { id: 5, name: 'Anna', age: 43, occupation: 'teacher' },
      { id: 6, name: 'Albert', age: 46, occupation: 'programmer' },
      { id: 7, name: 'Adam', age: 47, occupation: 'teacher' },
      { id: 8, ame: 'Robert', age: 32, occupation: 'driver' },
    ]);

    return {
      list,
      reduce,
      deleteFirst,
      deleteLast,
      first,
      last,
      filter,
      reset,
    };
  },
};
</script>
```

<ToggleDarkMode/>
