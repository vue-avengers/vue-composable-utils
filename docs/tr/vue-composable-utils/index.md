# Başlangıç

`vue-composable-utils` ve [@vue/composition-api](https://github.com/vuejs/composition-api) Vue 2.0 ile kullanabilirsiniz.

## Vue composable utils'i Deneyin

- Reactivity system with Vue.js.
- Javascript ile yazılmıştır.

## Kurmak

```bash
# yarn ile kurmak
yarn add @vue/composition-api vue-composable-utils
# npm ile kurmak
npm install @vue/composition-api vue-composable-utils
```

## Composable Araçlar

| İsim                                                     | Argümenler                         | Geriye değer döndürme                                        |
| -------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------ |
| [`UseBind`](/tr/vue-composable-utils/bind.md)            | initial                            | value, changed, reset                                        |
| [`UseEmbed`](/tr/vue-composable-utils/embed.md)          | f                                  | -                                                            |
| [`UseState`](/tr/vue-composable-utils/state.md)          | initial                            | value, set                                                   |
| [`UseList`](/tr/vue-composable-utils/list.md)            | initial                            | list, set, reduce, sort, first, deleteFirst, deleteLast, last,  filter, push, reset| 


- [UseBind](./bind.md).
- [UseEmbed](./embed.md).
- [UseState](./state.md).
- [UseList](./list.md).

<ToggleDarkMode/>
