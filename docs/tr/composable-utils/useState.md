# :sparkles: useState

> `useState` fonksiyonu bileşenlerde state değişkenlerine sahip olmanızı sağlayan bir fonksiyondur. Başlangıç statetinizi bu fonksiyona geçirirsiniz ve mevcut state değerine sahip bir değişken (başlangıç state olması gerekmez) ve bu değeri güncellemek için başka bir fonksiyon döndürür.

## :convenience_store: State

`useState` fonsiyonu aşağıdaki reaktif state olarak kullanılır:

```js
import { useState } from 'vue-composable-utils';
const [count, setCount] = useState();
```

`import { useState } from "vue-composable-utils"` içe aktarın Örnek () {`count` olarak adlandıracağımız yeni bir state değişkeni bildirmek `const [count, setCount] = useState(0);` We count adında bir state değişkeni tanımlayın ve 0 olarak ayarlayın.

## :rocket: Özellikleri

`useState`, size `reactive` `@vue/composition-api` ve reaktif olarak kullanılan özellikleri sağlayan fonksiyonlardır.

- useState: `@vue/composition-api` den `ref` and `readonly` kullanıldı.

## :computer: Uygulama

Aşağıdaki örneği kullanarak reactive olarak nasıl değiştiğini görebilirsiniz.

<StateComponent />

```vue
<template>
  <p>{{ count }}</p>
  <button @click="setCount(count - 1)">Decrement</button>
  <button @click="setCount(count + 1)">Increment</button>
</template>

<script>
import { useState } from 'vue-composable-utils';

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
