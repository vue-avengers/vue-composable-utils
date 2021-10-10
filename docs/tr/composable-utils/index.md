<p align="center"><a href="/tr"><img width="250" src="https://vue-composable-utils.netlify.app/assets/vue-composable-utils-logo.svg" alt="Vue Composable Utils logo"></a></p>
<h1 align="center">Vue Composable Utils</h1>
<p align="center">Reusability and Composition functions.</p>

## Başlangıç

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

| İsim                                        | Argümenler | Geriye değer döndürme                                                                       |
| ------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------- |
| [`UseBind`](./useBind.html)                 | initial    | value, changed, reset                                                                       |
| [`UseEmbed`](./useEmbed.html)               | initial    | isEmbedBlock, clear                                                                         |
| [`UseState`](./useState.html)               | initial    | value, set                                                                                  |
| [`UseDebounce`](./useDebounce.html)         | initial    | value, delay, debounceVal, debounceListener                                                 |
| [`UseDebounceFn`](./useDebounceFn.html)     | initial    | delay, immediate, fn                                                                        |
| [`UsePick`](./usePick.html)                 | Parameter  | Object, Keys                                                                                |
| [`UseResize`](./useResize.html)             | initial    | screenWidth, screenHeight, ratiowh, ratiohw, rect                                           |
| [`UseLocalStorage`](./useLocalStorage.html) | initial    | value, key,                                                                                 |
| [`UseQuene`](./useQuene.html)               | initial    | set, state, remove, first, last, size                                                       |
| [`UseModal`](./useModal.html)               | initial    | visible, setVisible, current, openModal, closeModal                                         |
| [`UseDarkMode`](./useDarkMode.html)         | initial    | darkMode, setDarkMode                                                                       |
| [`UseStringCase`](./useStringCase.html)     | initial    | string, camelCase,capitalizeCase, sentenceCase, kebabCase, pascalCase, lowerCase, upperCase |
| [`UseDate`](./useDate.html)                 | initial    | format, timeAgo, getDate, utc, timezone, difference                                         |
| [`Usei18nDate`](./usei18nDate.html)         | initial    | format, timeAgo, getDate, utc, timezone, difference,                                        |
| [`UseCookie`](./useCookie.html)             | initial    | cookie, appendCookie,setCookie, parseCookie ,getCookie, deleteCookie                        |
| [`UseClipboard`](./useClipboard.html)       | initial    | copy, set                                                                                   |
| [`UseList`](./useList.html)                 | initial    | list, set, reduce, sort, first, deleteFirst, deleteLast, last,filter, push, reset           |

- [UseBind](./useBind.html).
- [UseEmbed](./useEmbed.html).
- [UseState](./useState.html).
- [UseDebounce](./useDebounce.html).
- [UseDebounceFn](./useDebounceFn.html).
- [UsePick](./usePick.html).
- [UseResize](./useResize.html).
- [UseLocalStorage](./useLocalStorage.html).
- [UseQuene](./useQuene.html).
- [UseModal](./useModal.html).
- [UseDarkMode](./useDarkMode.html).
- [UseStringCase](./useStringCase.html).
- [UseDate](./useDate.html).
- [Usei18nDate](./usei18nDate.html).
- [UseCookie](./useCookie.html).
- [UseClipboard](./useClipboard.html).
- [UseList](./useList.html).

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

<ToggleDarkMode/>
