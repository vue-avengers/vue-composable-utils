# :sparkles: useLocalStorage

> `useLocalStorage` function is one of the methods of storing `key` and `value` in the browser.

## :convenience_store: Usage

The example usage of `useLocalStorage` function is shown below.

```js
import { useLocalStorage } from 'vue-composable-utils';
const { value } = useLocalStorage('test', 1);
```

## :rocket: Features

`useLocalStorage` has two parameters and one property 

Property

1 - `value` --> The data that is going to be stored in local storage

Parameters

`useLocalStorage(key,value)`

1- `key` --> Is used to switch between keys.

2- `value` --> Stored data.

## :computer: Example

You can see how it works reactively applying the example below.

<LocalStorageComponent />

```vue
<template>
  <div>
    <p>value is: {{ value }}</p>
    <button @click="value = '2'">Change</button>
  </div>
</template>

<script>
import { useLocalStorage } from 'vue-composable-utils';

export default {
  setup() {
    const { value } = useLocalStorage('test', 1);

    return { value };
  },
};
</script>
```

<ToggleDarkMode/>
