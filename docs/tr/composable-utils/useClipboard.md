# :sparkles: useClipboard

> `useClipboard()` fonksiyonu web sitenizde veya uygulamanızda panoya kopyalama işlevini yapmanıza için kullanılır.

## :convenience_store: Kullanım

`useClipboard` fonksiyonunun kullanım şekli aşağıdaki gibidir.

```js
import { useClipboard } from 'vue-composable-utils';
const { copy } = useClipboard();
```

## :rocket: Özellikler

`useClipboard` fonksiyonu `copy` özelliğine sahiptir. `copy` Özelliği iki adet parametre alır.

| Parametreler |      Açıklama      | 
| :-----       | :------------------|
| `value`      | Kopyalanacak değer.|
| `ref`        | Kopyalamak istediğimiz verinin kapsayıcı class'ına erişmek için kullanılır.|


## :computer: Uygulama

Aşağıdaki örneği kullanarak nasıl değiştiğini görebilirsiniz.

<ClipboardComponent />

```vue
<template>
  <div class="clipboard" ref="clipboardRef">
    <div>
      <p> {{ copyText }} </p>
      <button class="btn" @click="onCopy"> Copy </button>
    </div>
    <div>
      <input type="text" v-model="clipboardModel" />
      <button class="btn" @click="onCopyInput"> Copy </button>
      <p>{{ clipboardModel }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { useClipboard } from 'vue-composable-utils';

export default {
  name: 'ClipboardComponent',
  setup() {
    const clipboardRef = ref(null);
    const clipboardModel = ref(null);
    const copyText = ref("Kopyalanmak istenilen veri...");

    const { copy } = useClipboard();

    const onCopy = () => {
      copy(copyText.value, clipboardRef.value);
    };

    const onCopyInput = () => {
      copy(clipboardModel.value, clipboardRef.value);
    };

    return {
      copy,
      onCopy,
      copyText,
      onCopyInput,
      clipboardRef,
      clipboardModel
    };
  },
};
</script>
```

<ToggleDarkMode/>
