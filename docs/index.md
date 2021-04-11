---
title: Vue Composable Utils
lang: en-US
home: true
heroImage: assets/vue-composable-utils-logo.svg
actionText: Get Started →
actionLink: /composable-utils/
features:
  - title: Composable functions
    details: Composable functions that have been brought together for you to use in all your components.
  - title: Reactive
    details: Every time your component's render function changes, we have the full reactivity system.
footer: MIT Licensed | Copyright © 2021-present Abdulnasır olcan
description: Reusability and Composition functions.
meta:
  - name: og:title
    content: composableUtils
  - name: og:description
    content: Vue Composable Utils implemented as vue composition functions.
---

# :sunflower: Introduction

Vue Composable Utils implemented as vue composition functions. currently usable with the `@vue/composition-api`.
Vue composition function is just a regular JS factory function that returns a bunch of Vue specifically stuff like refs, etc.

 ## :package: Installation

```bash
# install with yarn
yarn add @vue/composition-api vue-composable-utils
# install with npm
npm install @vue/composition-api vue-composable-utils
```

## :rocket: Composable Utils

| Name                                                     | Arguments                          | Returns                                                      |
| -------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------ |
| [`UseBind`](./vue-composable-utils/bind.md)               | initial                            | value, changed, reset                                        |
| [`UseEmbed`](./vue-composable-utils/embed.md)            | f                                  | -                                                            |
| [`UseState`](./vue-composable-utils/state.md)            | initial                            | value, set                                                   |
| [`UseList`](./vue-composable-utils/list.md)              | initial                            | list, set, reduce, sort, first, deleteFirst, deleteLast, last,   filter,push, reset| 


- [UseBind](./vue-composable-utils/bind.md).
- [UseEmbed](./vue-composable-utils/embed.md).
- [UseState](./vue-composable-utils/state.md).
- [UseList](./vue-composable-utils/list.md).

## :computer: Usage

<List />

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
<ToggleDarkMode/>
<!-- TODO: DArk mode -->
