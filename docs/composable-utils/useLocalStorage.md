# :sparkles: useLocalStorage

> `useLocalStorage` fonksiyonu tarayıcıda key, value verilerini kaydetmek için kullanılan yöntemlerinden birisidir.

## :convenience_store: Usage

The example usage of `useLocalStorage` function is shown below.

```js
import { useLocalStorage } from 'vue-composable-utils';
const { value } = useLocalStorage('test', 1);
```

`import { useLocalStorage } from "vue-composable-utils";` function Example() { // Declare a new state variable, which we'll call `value` ` const { value } = useLocalStorage("test", 1);` We declare a state variable called count , and set it to 0 .

## :rocket: Features

`useLocalStorage` 2 adet parameter alır ve 1 adet özelliğe sahiptir.

Özellik

1 - `value` --> Local storage'a eklemek istediğimiz değer.

Parametreler

`useLocalStorage(key,value)`

1- key --> Anahtarlar arasında geçiş yapmanız gereken durumlarda kullanılır.
2- value --> Depolanan veridir.

## :computer: Example

You can see how it changes reactively using the example below.

<LocalStorageComponent />

```vue
<template>
  <div>
    <p>value is: {{ value }}</p>
    <button @click="value = '2'">Change</button>
  </div>
</template>

<script>
import { useLocalStorage } from 'vue-composable-utils';

export default {
  setup() {
    const { value } = useLocalStorage('test', 1);

    return { value };
  },
};
</script>
```

<ToggleDarkMode/>
