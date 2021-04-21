# :sparkles: usePick

> `usePick()` fonksiyonu verilen `key` değerini kullanarak filtrelenen nesnenin bir kopyasını döndürmek için kullanılır. Bu fonksiyon nesneden hangi özelliklerin seçildiğini belirterek istenilen koşulu sağlar.

## :sparkles: Kullanım

`usePick` fonksiyonunun kullanım şekli aşağıdaki gibidir.

```js
import { usePick } from 'vue-composable-utils';
const pick = usePick({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'd']);
```

## :rocket: Özellikler

`usePick` 2 adet parametre alır.

| Parametre | Açıklama                                                          |
| :-------- | :---------------------------------------------------------------- |
| `Object`  | İşlem yapılmak istenilen nesnedir.                                |
| `Keys`    | İsteğe bağlı bir parametredir. Seçilmesi gereken `key` değeridir. |

## :computer: Uygulama

Aşağıdaki örneği kullanarak reaktif olarak nasıl çalıştığını görebilirsiniz.

<PickComponent />

```vue
<template>
  <p>{{ JSON.stringify(pick) }}</p>
</template>

<script>
import { usePick } from 'vue-composable-utils';

export default {
  setup() {
    const pick = usePick(
      {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      },
      ['a', 'd'],
    );

    return {
      pick,
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
}
</style>
```

<ToggleDarkMode/>
