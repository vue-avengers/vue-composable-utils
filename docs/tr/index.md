---
title: Vue Composable Utils
lang: tr-TR
home: true
heroImage: .vitepress/assets/img/vue-composable-utils-logo.svg
actionText: Hemen Başla →
actionLink: ./tr/vue-composable-utils/
features:
  - title: Composable fonksiyonlar
    details: Tüm bileşenlerinizde kullanmanız için bir araya getirilmiş composable fonksiyonlar.
  - title: Reaktif
    details: Bileşenleriniz render fonksiyonu her değiştiğinde, tamamen reaktif sistemine sahibiz.
footer: MIT Lisanslı | Telif hakkı © 2021-present Abdulnasır olcan
description: Vue Composable Utils, Vue.js composition fonksiyon olarak uygulanır.
meta:
  - name: og:title
    content: vueComposableUtils
  - name: og:description
    content: Vue Composable Utils, vue composition fonksiyon olarak uygulanır.
---

# Başlangıç

Vue Composable Utils kullanmak için öncelikli olarak `@vue/composition-api` yüklemeniz gerekiyor.

## Kurulum

```bash
# yarn ile kurmak
yarn add @vue/composition-api vue-composable-utils
# npm ile kurmak
npm install @vue/composition-api vue-composable-utils
```

## Composable Araçlar

| İsim                                                     | Argümenler                         | Geriye değer döndürme                                        |
| -------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------ |
| [`UseBind`](./vue-composable-utils/bind.md)              | initial                            | value, changed, reset                                        |
| [`UseEmbed`](./vue-composable-utils/embed.md)            | f                                  | -                                                            |
| [`UseState`](./vue-composable-utils/state.md)            | initial                            | value, set                                                   |
| [`UseList`](./vue-composable-utils/list.md)              | initial                            | list, set, reduce, sort, first, deleteFirst, deleteLast, last,  filter, push, reset| 

- [UseBind](./vue-composable-utils/bind.md).
- [UseEmbed](./vue-composable-utils/embed.md).
- [UseState](./vue-composable-utils/state.md).
- [UseList](./vue-composable-utils/list.md).

## Uygulama
```vue
<template>
  <div>
    <p>list: {{ JSON.stringify(list) }}</p>
    <button @click="sort((a, b) => a - b)">Sort List</button>
    <button @click="set([...list, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])">Set list</button>
    <button @click="reduce((total, next) => {return total + next})">Sum list</button>
    <button @click="reduce((t, n) => Math.max(t, n))">Max list</button>
    <button @click="reduce((t, n) => (t.includes(n) ? t : [...t, n]))">Unique List</button>
    <button @click="reduce((t, n) => [n, ...t])">Reverse List</button>
    <button @click="reduce((t, n) => t.concat(n))">Flatten List</button>
    <button @click="reduce((t, {id, ...attrs}) => ({...t, [id]: attrs }))">Convert array to object</button>
    <button @click="reduce((t, n) => {t.push(n * 2); return t})">Map List</button>
    <button @click="deleteFirst">Delete First</button>
    <button @click="deleteLast">Delete Last</button>
    <button @click="first">First</button>
    <button @click="last">Last</button>
    <button @click="filter((a) => a >= 5)">Greater than or equal to 5</button>
    <button @click="push(11, 12, 13, 14, 15, 16, 17, 18, 19, 20)">Push</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import { useList } from "vue-composable-utils";

export default {
  setup() {
    const {
      list,
      sort,
      set,
      reduce,
      first,
      deleteFirst,
      deleteLast,
      last,
      filter,
      push,
      reset
    } = useList([5,1,4,7,10,4,9,6,2,5,8,3]);

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
<ToggleDarkMode/>
<!-- TODO: Dark mode-->
