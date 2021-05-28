# :sparkles: useLocalStorage

> `useLocalStorage()` fonksiyonu tarayıcıda key, value verilerini kaydetmek için kullanılan yöntemlerinden birisidir.

## :convenience_store: Kullanım

`useLocalStorage` fonksiyonunun kullanım şekli aşağıdaki gibidir.

```js
import { useLocalStorage } from 'vue-composable-utils';
const { value } = useLocalStorage('test', 1);
```

## :rocket: Özellikler

`useLocalStorage` 2 adet parametre alır ve 1 adet özelliğe sahiptir.

Özellik

1 - `value` --> Local storage'a eklemek istediğimiz değer.

Parametreler

`useLocalStorage(key,value)`

1- key --> Anahtarlar arasında geçiş yapmanız gereken durumlarda kullanılır.

2- value --> Depolanan veridir.

## :computer: Uygulama

Aşağıdaki örneği kullanarak reaktif olarak nasıl çalıştığını görebilirsiniz.

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
