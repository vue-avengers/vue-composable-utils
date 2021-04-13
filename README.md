<p align="center"><a href="https://vue-composable-utils.netlify.app" target="_blank" rel="noopener noreferrer"><img width="250" src="https://vue-composable-utils.netlify.app/assets/vue-composable-utils-logo.svg" alt="Vue Composable Utils logo"></a></p>
<h1 align="center">Vue Composable Utils</h1>
<p align="center">Reusability and Composition functions.</p>

## :sunflower: Introduction
Vue Composable Utils implemented as vue composition functions. currently usable with the `@vue/composition-api`.
## :package: Installation

```bash
# install with yarn
yarn add @vue/composition-api vue-composable-utils
# install with npm
npm install @vue/composition-api vue-composable-utils
```

## :books: Documentation

Check our [documentation](https://vue-composable-utils.netlify.app/)

## :rocket: Composable Utils

| Name                                                     | Arguments                          | Returns                                                      |
| -------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------ |
| [`UseBind`](#useBind)                                    | initial                            | value, changed, reset                                        |
| [`UseEmbed`](#useEmbed)                                  | f                                  | -                                                            |
| [`UseState`](#useState)                                  | initial                            | value, set                                                   |
| [`UseList`](#UseList)                                    | initial                            | list, set, reduce, sort, first, deleteFirst, deleteLast, last,filter, push, reset| 


- [UseBind](./composable-utils/bind.md).
- [UseEmbed](./composable-utils/embed.md).
- [UseState](./composable-utils/state.md).
- [UseList](./composable-utils/list.md).

## :computer: Usage

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
    <button @click="set([[...list], [11, [12], 13], [14, [15], 16, 17],[ 18, [19], 20]])">Set Multi Array</button>
    <button @click="reduce((t, n) => t.concat(n))">Flatten List</button>
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

## :man: :woman: Contributors

<table>
  <tr>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-1.png" width="100px;" alt=""/><br /><sub><b>Abdulnasır Olcan</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-2.png" width="100px;" alt=""/><br /><sub><b>Büşra Şanlıbayrak</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-3.png" width="100px;" alt=""/><br /><sub><b>Mehmet Varol</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-2.png" width="100px;" alt=""/><br /><sub><b>Rukiye Demir</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-3.png" width="100px;" alt=""/><br /><sub><b>Burak Küçükali</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-4.png" width="100px;" alt=""/><br /><sub><b>İlker İsmailoğlu</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-1.png" width="100px;" alt=""/><br /><sub><b>Güvenç Terzierol</b></sub></a></td>
  </tr>
</table>

## License

MIT
