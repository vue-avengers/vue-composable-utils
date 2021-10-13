# :sparkles: useEmbed

> `useEmbed` uygulamanıza embed kod eklemenizi ya da gerektiğinde kaldırmanızı oldukça kolaylaştırır.

## :convenience_store: State

`useEmbed` modülünü import edin ve ihtiyacınız olan metotları aşağıdaki gibi çağırın:

```js
import { useEmbed } from 'vue-composable-utils';

const { isEmbedBlock, clear } = useEmbed(code);
```

## :rocket: Özellikleri

`useEmbed` `"reactive"` bir yapı ile birlikte `@vue/composition-api` ile uyumlu şekilde kullanılabilir.

- useEmbed: eklemek istediğiniz embed kodu argüman olarak gönderin.

```js
const code = ref(null);

const { isEmbedBlock, clear } = useEmbed(code);
```

### :alembic: isEmbedBlock

`isEmbedBlock` gönerilen kod bloğunun bir embed kodu olup olmadığını belirler.

```vue
<template>
  <div>
    <textarea rows="5" cols="50" placeholder="Place embed code here" v-model="code"></textarea>
    <button type="button" @click="clear">Clear</button>
    <div v-if="isEmbedBlock" v-html="code"></div>
  </div>
</template>

<script>
import { useEmbed } from 'vue-composable-utils';

export default {
  name: 'EmbedComponent',
  setup() {
    const code = ref(null);

    const { isEmbedBlock } = useEmbed(code);

    return {
      code,
      isEmbedBlock,
    };
  },
};
</script>
```

### :x: Clear

DOM' a eklenmiş script elementini kaldırır.

```vue
<template>
  <div class="hello">
    <textarea rows="5" cols="50" placeholder="Place embed code here" v-model="code"></textarea>
    <button type="button" class="clear-button" @click="clear">Clear</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useEmbed } from 'vue-composable-utils';

export default {
  name: 'EmbedComponent',
  setup() {
    const code = ref(null);

    const { clear } = useEmbed(code);

    return {
      code,
      clear,
    };
  },
};
</script>
```

## :computer: Uygulama

Eklenen embed kodun nasıl reaktif şekilde değişebildiğini aşağıdaki örnekte görebilirsiniz:

<EmbedComponent />

```vue
<template>
  <div>
    <textarea rows="5" cols="50" placeholder="Place embed code here" v-model="code"></textarea>
    <button type="button" class="first" @click="clear">Clear</button>
    <div v-if="isEmbedBlock" v-html="code"></div>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api';
import { useEmbed } from 'vue-composable-utils';

export default {
  setup() {
    const code = ref(null);

    const { isEmbedBlock, clear } = useEmbed(code);

    return {
      code,
      clear,
      isEmbedBlock,
    };
  },
};
</script>
```

<ToggleDarkMode/>
