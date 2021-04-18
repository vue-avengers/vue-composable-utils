# :sparkles: useQueue

> `useQueue()` fonksiyonu veri yapısını ve dizi türü yöntemlerini kullanarak verinin kuyruğa nasıl uygulanacağını sağlar. FIFO (first-in, first-out) ve LIFO(last-in, first-out) veri yapıları kullanılır.

## :sparkles: Kullanım

`useQueue` fonksiyonunun kullanım şekli aşağıdaki gibidir.

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

## :rocket: Özellikler

`useQueue` 1 adet parametre alır. --> `useQueue()`

| Parametre | Açıklama                                    |
| :-------- | :------------------------------------------ |
| `set`     | Diziye obje öğe ekler.                      |
| `state`   | Değişebilecek verilerin tutulduğu nesnedir. |
| `remove`  | İlk değeri silmek için kullanılır.          |
| `first`   | İlk değeri verir.                           |
| `last`    | Son değeri verir.                           |
| `size`    | Dizinin boyutunu verir.                     |

## :computer: Uygulama

Aşağıdaki örneği kullanarak reaktif olarak nasıl çalıştığını görebilirsiniz.

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

<ToggleDarkMode/>
