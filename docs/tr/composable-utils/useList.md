# :sparkles: useList

> `useList()` fonksiyonu diziyi özelleştirmek için kullanılan bir fonksiyondur.

## Kullanım

`useList` fonksiyon aşağıdaki reaktif durum olarak kullanılır.

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

## Özellikler

`useList` 1 adet parametre alır. --> `useList([])`

| Parametre     | Açıklama                                   |
| :------------ | :----------------------------------------- |
| `list`        | Parametre olarak gönderilen değeri verir.  |
| `sort`        | Gönderilen listeyi sıralar.                |
| `set`         | İşlem yapılmış yeni listeyi verir.         |
| `reduce`      | Listede reduce işlemini gerçekleştirir.    |
| `first`       | Listenin ilk değerini verir.               |
| `deleteFirst` | Listenin ilk değerini siler.               |
| `deleteLast`  | Listenin son değerini siler.               |
| `last`        | Listenin son değerini verir.               |
| `filter`      | Belirtilen koşula göre yeni listeyi verir. |
| `push`        | Listenin sonuna verilen değeri ekler.      |
| `reset`       | Listeyi başlangıç değerine döndürür.       |

## Uygulama

Aşağıdaki örneği kullanarak reactive olarak nasıl değiştiğini görebilirsiniz.

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
