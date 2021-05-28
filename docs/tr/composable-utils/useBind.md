# :sparkles: useBind

> `useBind` verileri bileşenlere bağlamaya yarayan bir fonksiyondur.

## :convenience_store: Kullanım

`useBind` fonksiyon aşağıdaki gibi kullanılır.

```js
import { useBind } from 'vue-composable-utils';
const { value, changed, reset } = useBind('Type a here....');
```

## :rocket: Özellikler

`useBind()` fonksiyonuna başlangıç değeri gönderilir.

`useBind` 3 adet reaktif özelliğe sahiptir.

1 - `value` --> Bind edilmek istenilen değer

2 - `changed` --> Değiştirilmek istenilen değer

3 - `reset` --> Başlangıç değerine döndüren metoddur.

## :computer: Uygulama

Aşağıdaki örneği kullanarak reactive olarak nasıl değiştiğini görebilirsiniz.

<BindInputComponent />

```vue
<template>
  <div>
    <p>Input : {{ value }}</p>
    <input type="text" :value="value" @input="changed" />
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import { useBind } from 'vue-composable-utils';

export default {
  setup() {
    const { value, changed, reset } = useBind('Bir şeyler yazın...');
    return { value, changed, reset };
  },
};
</script>
```

<BindSelectComponent />

```vue
<template>
  <div>
    <p>Select : {{ value }}</p>
    <div>
      <select @change="changed">
        <option value="apple">apple</option>
        <option value="orange">orange</option>
        <option value="watermelon">Watermelon</option>
        <option value="strawberry">Strawberry</option>
      </select>
    </div>
  </div>
</template>

<script>
import { useBind } from 'vue-composable-utils';

export default {
  setup() {
    const { value, changed, reset } = useBind('Bir şeyler yazın...');
    return { value, changed, reset };
  },
};
</script>
```

<ToggleDarkMode/>
