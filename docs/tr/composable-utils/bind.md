# :sparkles: useBind

> `useBind` fonksiyon bileşenlerde durum değişkenlerine sahip olmanızı sağlayan bir işlevdir..

## :convenience_store: State

`useBind` fonksiyon aşağıdaki reaktif durum olarak kullanılır:

```js
import { useBind } from 'vue-composable-utils';
const { value, changed, reset } = useBind('Type a here....');
```

## :rocket: Özellikleri

`useBind`, size `reactive` `@vue/composition-api` ve reaktif olarak kullanılan özellikleri sağlayan fonksiyonlardır.

- useBind: `@vue/composition-api` den `value`, `changed` ve `reset`

## :computer: Uygulama

Aşağıdaki örneği kullanarak reactive olarak nasıl değiştiğini görebilirsiniz.

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
    const { value, changed, reset } = useBind('Type a here....');
    return { value, changed, reset };
  },
};
</script>
```

```vue
<template>
  <div>
    <p>Select : {{ value }}</p>
    <div>
      <select @change="changed">
        <option value="apple">apple</option>
        <option value="orange">orange</option>
        <option value="strawberry">Strawberry</option>
      </select>
    </div>
  </div>
</template>

<script>
import { useBind } from 'vue-composable-utils';

export default {
  setup() {
    const { value, changed, reset } = useBind('Type a here....');
    return { value, changed, reset };
  },
};
</script>
```

<ToggleDarkMode/>
